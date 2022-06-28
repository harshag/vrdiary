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
import LandingScreen from './src/screens/LandingScreen';

const MenuDrawer = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={LandingScreen} options={{title: "Dashborad"}}/>
      <Drawer.Screen name="View invoice" component={InvoiceScreen} />
      <Drawer.Screen name="Create invoice" component={AddInvoiceScreen} />
      <Drawer.Screen name="Logout" component={LogoutScreen} />
    </Drawer.Navigator>
  )
}

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MenuDrawer">
        <Stack.Screen name="Home" component={LandingScreen}/>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Invoice" component={InvoiceScreen} options={{title: "View Invoice"}} />
        <Stack.Screen name="AddInvoice" component={AddInvoiceScreen} options={{title: "Create Invoice"}} />
        <Stack.Screen name="MenuDrawer" component={MenuDrawer} options={{ headerShown: false }} />
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
