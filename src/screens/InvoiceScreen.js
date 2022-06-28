import { useState, useEffect, useLayoutEffect } from 'react'
import { StyleSheet, FlatList, View, Text } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider, Button } from 'react-native-paper';

import InvoiceItemComponent from '../components/InvoiceItemComponent';
import MenuComponent from '../components/MenuComponent';
import AppConstants from '../../AppConstants';

import * as restClient from '../lib/restclient';

function InvoiceScreen({navigation}) {
  const [invoiceMenuItems, setinvoiceMenuItems] = useState([]);
  const [invoiceMenuTitle, setInvoiceMenuTitle] = useState("Invoices");
  const [customerMenuTitle, setCustomerMenuTitle] = useState("Customers");
  const [customers, setCustomers] = useState([]);
  const [invoice, setInvoice] = useState([]);
  const [selectedInvoice, setSelectedInvoice] = useState({});
  const [selectedCustomer, setSelectedCustomer] = useState({});
  
  useEffect(() => {
      restClient.getCustomers()
      .then((items) => {
        setCustomers(items);
      }).catch((error) => {
        console.log("Error fetching customers: ", error.message);
        if(error.response.status === 401) {
          navigation.navigate("Login");
        };
      });

  }, []);

  async function customerMenuCb (selectedCustomer) {
    setSelectedCustomer(selectedCustomer);
    let invoices = [];
    try {
      invoices = await restClient.getAllInvoices(selectedCustomer);
    } catch(error) {
      if(error.response.status === 401) {
        navigation.navigate("Login");
      };
    }

    setinvoiceMenuItems(invoices);
    setCustomerMenuTitle(selectedCustomer.name);
    setInvoice([]);
    setInvoiceMenuTitle("Invoices");
  }

  async function invoiceMenuCb(selectedInvoice) {
    setSelectedInvoice(selectedInvoice);
    let invoice = {}
    try {
      invoice = await restClient.getOneInvoice(selectedInvoice.id);
    } catch(error) {
      console.log('Error in InvoiceMenu selection: ', error);
      if(error.response.status === 401) {
        navigation.navigate("Login");
      };
    }

    setInvoice(invoice);
    setInvoiceMenuTitle(selectedInvoice.name);
  }

  const renderItem = ({item}) => (
    <InvoiceItemComponent invoiceItem={item} />
  );

  return (
    <Provider>
      <SafeAreaProvider style={styles.container}>
        <View style={styles.invoiceDetailsContainer}>
          <View style={styles.menuContainer}>
            <View style={{marginRight: 10}}>
              <MenuComponent title={customerMenuTitle} items={customers} onSelect={customerMenuCb} key={"customerMenu"} />
            </View>
            <View style={{marginRight: 10}}>
              <MenuComponent title={invoiceMenuTitle} items={invoiceMenuItems} onSelect={invoiceMenuCb} key={"invoiceMenu"} />
            </View>
          </View>
          <View style={styles.invoiceItems}>
            <FlatList
              data={invoice}
              renderItem = {renderItem}
              keyExtractor = {(item, index) => `${item.item_code}+${index}`}
            />
          </View>
        </View>
        {invoice.length > 0 ? <View style={[styles.invoiceSummaryContainer]}>
          <View style={styles.itemTextLeftContainer}>
            <Text style={{...styles.itemText, fontWeight: 'bold', fontSize: 18}}>
              Total Amount
            </Text>
          </View>
          <View style={styles.itemTextRightContainer}>
            <Text style={{...styles.itemText, fontWeight: 'bold', fontSize: 18}}>
              {AppConstants.currencySymbol}{selectedInvoice.total}
            </Text>
          </View>
          <View style={styles.itemTextLeftContainer}>
            <Text style={{...styles.itemText, fontWeight: 'bold', fontSize: 14}}>
              Receved Amount
            </Text>
          </View>
          <View style={styles.itemTextRightContainer}>
            <Text style={{...styles.itemText, fontWeight: 'bold', fontSize: 14}}>
              {AppConstants.currencySymbol}{selectedInvoice.amount_received}
            </Text>
          </View>
          <View style={styles.itemTextLeftContainer}>
            <Text style={{...styles.itemText, fontWeight: 'bold', fontSize: 14}}>
              Balance
            </Text>
          </View>
          <View style={styles.itemTextRightContainer}>
            <Text style={{...styles.itemText, fontWeight: 'bold', fontSize: 14}}>
              {AppConstants.currencySymbol}{(selectedInvoice.total - selectedInvoice.amount_received) || 0}
            </Text>
          </View>
        </View> : null}
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    flexDirection: 'column',
    flex: 1
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10
  },
  invoiceDetailsContainer: {
    flex: 1,
    height: "88%",
  },
  invoiceItems: {
      height: '92%'
  },
  invoiceSummaryContainer: {
      backgroundColor: '#f3f3f3',
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 10,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#ededed',
      height: 100
    },
  itemTextLeftContainer: {
      width: '60%',
      alignContent: 'flex-start'
  },
  itemTextRightContainer: {
      width: '40%',
      alignItems: 'flex-end'
  },
  itemText: {
      margin: 3,
      fontSize: 15,
      color: '#87888D'
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  }
});

export default InvoiceScreen;