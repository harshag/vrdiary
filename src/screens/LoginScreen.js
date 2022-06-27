import { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, TextInput } from 'react-native-paper';
import * as SecureStore from 'expo-secure-store';

import * as restClient from '../lib/restclient';

function LoginScreen({navigation}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function saveTokens(key, tokens) {
    await SecureStore.setItemAsync(key, tokens);
  }

  const handleLogin = async () => {
    setMessage("");
    if(username.trim().length == 0 || password.length == 0){
      setMessage("Username or Password cannot be empty");
      return
    }

    try {
      const response = await restClient.login(username.trim(), password);
      let storeRes = await saveTokens("tokens", JSON.stringify(response.data) || {});
      navigation.replace('MenuDrawer');
    } catch(error) {
      console.log("Error during login: ", error);
      let loginError = error.response?.data?.detail || "Error while login, check credentials and try again";
      setMessage(loginError);
    }
  };

  return (
    <View style={styles.container}>
        <Text style={{color: "tomato"}}>{message}</Text>
        <TextInput
          label={"Username"}
          value={username}
          onChangeText={username => setUsername(username)}
          mode={'outlined'}
          autoFocus={true}
          style={styles.formElement}
        />
        <TextInput
          label={"Password"}
          value={password}
          onChangeText={password => setPassword(password)}
          mode={'outlined'}
          secureTextEntry={true}
          style={styles.formElement}
        />
        <Button onPress={handleLogin} style={styles.formElement}>Login</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    padding: 20
  },
  formElement: {
    marginTop: 10,
  }
});

export default LoginScreen;
