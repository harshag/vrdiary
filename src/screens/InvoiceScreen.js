import React from 'react'
import { StyleSheet, FlatList, View, Text } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider, FAB } from 'react-native-paper';

import InvoiceItemComponent from '../components/InvoiceItemComponent';
import MenuComponent from '../components/MenuComponent';

import { invoiceData, allInvoiceDetails, invoiceItems }  from '../mockData/InvoiceData'

function getCustomers() {
  let customers = []

  for (const index in allInvoiceDetails) {
    let customer = {
      id: allInvoiceDetails[index].customer.code,
      name: allInvoiceDetails[index].customer.name,
      invoiceId: allInvoiceDetails[index].invoice_id
    }

    customers.push(customer)
  }

  return customers;
  
}

async function getAllInvoices(customer) {
  let allInvoiceData = invoiceItems.filter((invoice) => {
    return invoice.sales_invoice === customer.invoiceId
  });

  return allInvoiceData;
}

async function getOneInvoice(invoiceId) {
  let invoice = invoiceItems.filter((invoice) => {
    return invoice.sales_invoice === invoiceId
  });

  return invoice;
}

function InvoiceScreen({navigation}) {
  const [invoiceMenuItems, setinvoiceMenuItems] = React.useState([]);
  const [invoiceMenuTitle, setInvoiceMenuTitle] = React.useState("Invoices");
  const [customerMenuTitle, setCustomerMenuTitle] = React.useState("Customers");
  const [invoice, setInvoice] = React.useState([]);

  let customerMenuItems = getCustomers()

  async function customerMenuCb (selectedItem) {
    let invoices = await getAllInvoices(selectedItem);

    let invoiceItems = invoices.map(invoice => {
      let item = {
        id: invoice.sales_invoice,
        name: invoice.sales_invoice
      }
      return item
    });

    setinvoiceMenuItems(invoiceItems);
    setCustomerMenuTitle(selectedItem.name);
    setInvoice([]);
    setInvoiceMenuTitle("Invoices");
  }

  async function invoiceMenuCb(selectedItem) {
    let invoice = await getOneInvoice(selectedItem.id);
    
    console.log(selectedItem);
    console.log(invoice);

    setInvoice(invoice);
    setInvoiceMenuTitle(selectedItem.name);
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
              <MenuComponent title={customerMenuTitle} items={customerMenuItems} onSelect={customerMenuCb} key={"customerMenu"} />
            </View>
            <View style={{marginRight: 10}}>
              <MenuComponent title={invoiceMenuTitle} items={invoiceMenuItems} onSelect={invoiceMenuCb} key={"invoiceMenu"} />
            </View>
          </View>
          <View>
            <FlatList
              data={invoice}
              renderItem = {renderItem}
              keyExtractor = {item => item.sales_invoice}
            />
          </View>
        </View>
        {/* <View style={[styles.invoiceSummary, {height: invoice.length > 0 ? 150 : 0}]}>
          <Text>Total Amount</Text>
          <Text>Total Amount</Text>
          <Text>Total Amount</Text>
        </View> */}
        <FAB
          style={styles.fab}
          medium
          icon="plus"
          onPress={() => navigation.navigate("AddInvoice")}
        />
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
    flex: 1
  },
  invoiceSummary: {
    backgroundColor: '#f3f3f3'
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  }
});

export default InvoiceScreen;