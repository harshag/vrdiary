import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LoginScreen from './src/screens/LoginScreen';
import InvoiceScreen from './src/screens/InvoiceScreen';
import AddInvoiceScreen from './src/screens/AddInvoiceScreen';
import LogoutScreen from './src/screens/LogoutScreen';

const MenuDrawer = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Invoice" component={InvoiceScreen} />
      <Drawer.Screen name="Add Invoice" component={AddInvoiceScreen} />
      <Drawer.Screen name="Logout" component={LogoutScreen} />
    </Drawer.Navigator>
  )
}

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MenuDrawer">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Invoice" component={InvoiceScreen} />
        <Stack.Screen name="AddInvoice" component={AddInvoiceScreen} />
        <Stack.Screen name="MenuDrawer" component={MenuDrawer} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
