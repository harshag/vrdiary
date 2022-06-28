import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DialogAlert from '../components/DialogComponent';

import GlobalStyle from '../../AppStyles';
import * as restClient from '../lib/restclient';

function LandingScreen({navigation}) {

  const handleViewInvoice = () => navigation.navigate("Invoice");
  const handleCreateInvoice = () => navigation.navigate("AddInvoice");

  useEffect(() => {
    restClient.getCustomers()
    .then((items) => {
      console.log("Customers fetched: ", items);
    }).catch((error) => {
      console.log("Error fetching customers: ", error.message);
      if(error.response.status === 401) {
        navigation.navigate("Login");
      };
    });

  }, []);

  return (
    <View style={[GlobalStyle.screenContainer, styles.container]}>
      <TouchableOpacity onPress={handleViewInvoice} style={[styles.invoiceCard, styles.viewInvoiceCard]}>
        <Text style={styles.invoiceCardText}>View Invoice</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCreateInvoice} style={[styles.invoiceCard, styles.createInvoiceCard]}>
        <Text style={styles.invoiceCardText}>Create Invoice</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  invoiceCard: {
    width: '90%',
    height: '25%',
    margin: 30,
    borderRadius: 20,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  invoiceCardText: {
    fontSize: 30,
    color: "#ffffff"
  },
  viewInvoiceCard: {
    backgroundColor: "#575add",
    borderColor: "#1a1b44",
  },
  createInvoiceCard: {
    backgroundColor: "#1190d5",
    borderColor: "#0a5c88"
  }
});

export default LandingScreen;
