import { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, TextInput } from 'react-native-paper';
import * as SecureStore from 'expo-secure-store';

import * as restClient from '../lib/restclient';

function LogoutScreen({navigation}) {

  async function removeTokens(key) {
    await SecureStore.deleteItemAsync(key);
  }

  removeTokens("tokens").then(() => {
    console.log("Logged out: ");
    navigation.replace("Login");
  })
  .catch((error) => {
    console.log("Error during logout: ", error);
  });

  return (
    <View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default LogoutScreen;
