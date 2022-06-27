import { useState, useEffect, useLayoutEffect } from 'react'
import { StyleSheet, FlatList, View, Text, Keyboard } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button, Provider, TextInput } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

import AddInvoiceItemComponent from '../components/AddInvoiceItemComponent';
import InvoiceItemComponent from '../components/InvoiceItemComponent';
import MenuComponent from '../components/MenuComponent';

import AddCustomerComponent from '../components/AddCustomerComponent';
import * as restClient from '../lib/restclient';

function AddInvoiceScreen({navigation}) {
    const [showItemsModalComponent, setShowItemsModalComponent] = useState(false);
    const [showCustomerModalComponent, setShowCusotomerModalComponent] = useState(false);

    const [selectedInvoiceDate, setSelectedInvoiceDate] = useState("");
    const [selectedCustomer, setSelectedCustomer] = useState("");

    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [customers, setCustomers] = useState([]);
    const [allInvoiceItems, setAllInvoiceItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    const handleAddCustomer = () => {
        setShowCusotomerModalComponent(true);
    }

    const handleAddItems = () => {
        showAddItemsModal(true);
    }

    const showAddItemsModal = (show) => {
        setShowItemsModalComponent(show);
    }

    const showAddCustomerModal = (show) => {
        setShowCusotomerModalComponent(show);
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button onPress={submitInvoice} disabled={ (selectedCustomer === "" || allInvoiceItems.length === 0) }>Submit</Button>
            )
        });
    }, [navigation, selectedCustomer, allInvoiceItems]);

    useEffect(() => {
        restClient.getCustomers()
          .then((items) => {
            setCustomers(items);
          }).catch((error) => {
            console.log("Get Customers Error: ", error);
          });
    }, []);
      
    function customerMenuCb (selectedItem) {
        setSelectedCustomer(selectedItem);
    }

    function handleCreatedCustomer(customer) {
        let currentCustomers = customers;
        currentCustomers.push(customer);
        setCustomers(currentCustomers);

        customerMenuCb({
            name: customer.name,
            id: customer.id
        });
    }

    function formatInvoiceDate(selectedDate) {
        let custom = selectedDate.toISOString().split('T')[0];
        setSelectedInvoiceDate(custom)
    }

    const onChange = (event, selectedDate) => {
        setShow(false);
        setDate(selectedDate);

        formatInvoiceDate(selectedDate);

        Keyboard.dismiss();
    };
    
    const showDatepicker = () => {
        setShow(true);
    };

    const renderItem = ({item}) => (
        <InvoiceItemComponent invoiceItem={item} />
    );

    const handleAddedItem = (item) => {
        let invoiceItems = allInvoiceItems;
        invoiceItems.push(item);
        setAllInvoiceItems(invoiceItems);

        calculateAmount();
    }

    const calculateAmount = () => {
        let amount = 0;
        amount = allInvoiceItems.reduce((prev, current) => {
            console.log('current: ', current);
            amount = amount + current.amount;
            return amount;
        }, 0);

        setTotalAmount(amount);
    }

    const submitInvoice = async () => {
        let items = allInvoiceItems.map((item) => {
            return {
                item: item.item.id,
                quantity: parseInt(item.quantity) || 0,
                free_quantity: parseInt(item.free_quantity) || 0
            }
        });

        let invoice = {
            invoice_date: selectedInvoiceDate,
            mobile_no: selectedCustomer.phone,
            employee: selectedCustomer.employeeNo,
            customer: selectedCustomer.id,
            amount_received : 0,
            items: items
        };
        let response = await restClient.createInvoice(invoice);
        if(response.data) {
            navigation.navigate("Invoice");
        }
    }

    return (
        <Provider>
            <SafeAreaProvider style={styles.container}>
                <View style={styles.addInvoiceContainer}>
                    <View style={styles.customerGroup}>
                        <MenuComponent 
                            title={selectedCustomer.name || "Select Customer"}
                            items={customers}
                            onSelect={customerMenuCb}
                            key={"customerMenu"}
                            customStyle={{marginBottom: 10}}
                        />
                        <Button onPress={handleAddCustomer} style={{alignContent: 'center', marginBottom: 10, marginLeft: 10, backgroundColor: '#f3f3f3'}}>Add Customer</Button>
                    </View>
                    <TextInput
                        label={"Date"}
                        value={selectedInvoiceDate || formatInvoiceDate(new Date())}
                        style={{width: 350, height: 40, marginBottom: 10}}
                        mode={'outlined'}
                        onFocus={showDatepicker}
                    />
                    {show ? (
                        <DateTimePicker
                            value={date}
                            mode={'date'}
                            onChange={onChange}
                        />
                    ) : null}
                    <Button onPress={handleAddItems} style={{maxWidth: 350, marginBottom: 10}}>Add Items</Button>
                    <View style={styles.invoiceItems}>
                        <FlatList
                            data={allInvoiceItems}
                            renderItem = {renderItem}
                            keyExtractor = {item => item.id}
                        />
                    </View>
                    <AddInvoiceItemComponent showModal={showAddItemsModal} addItems={handleAddedItem} visible={showItemsModalComponent} />
                    <AddCustomerComponent showModal={showAddCustomerModal} visible={showCustomerModalComponent} returnCustomer={handleCreatedCustomer}/>
                </View>
                {allInvoiceItems.length > 0 ? <View style={[styles.invoiceSummaryContainer]}>
                    <View style={styles.itemTextLeftContainer}>
                        <Text style={{...styles.itemText, fontWeight: 'bold', fontSize: 18}}>
                        Total Amount
                        </Text>
                    </View>
                    <View style={styles.itemTextRightContainer}>
                        <Text style={{...styles.itemText, fontWeight: 'bold', fontSize: 18}}>
                            {totalAmount}
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
        //flex: 1,
        //alignItems: 'center'
    },
    customerGroup: {
        flexDirection: 'row'
    },
    addInvoiceContainer: {
        height: "88%",
    },
    invoiceItems: {
        height: '75%'
    },
    invoiceSummaryContainer: {
        backgroundColor: '#f3f3f3',
        flexDirection: 'row',
        flexWrap: 'wrap',
        //flex: 1,
        marginTop: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ededed',
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
    submit: {
        margin: 10
    }
});

export default AddInvoiceScreen;