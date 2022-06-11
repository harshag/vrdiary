import { useState, useCallback } from 'react'
import { StyleSheet, FlatList, View, Text, Keyboard } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button, Provider, TextInput } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

import AddInvoiceItemComponent from '../components/AddInvoiceItemComponent';
import MenuComponent from '../components/MenuComponent';
import { allCustomers }  from '../mockData/InvoiceData'
import AddCustomerComponent from '../components/AddCustomerComponent';

function AddInvoiceScreen(navigation) {
    const [showItemsModalComponent, setShowItemsModalComponent] = useState(false);
    const [showCustomerModalComponent, setShowCusotomerModalComponent] = useState(false);

    const [invoiceDate, setInvoiceDate] = useState("");
    const [selectedCustomer, setSelectedCustomer] = useState("");

    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const handleAddCustomer = () => {
        setShowCusotomerModalComponent(true);
    }

    const handleAddItems = () => {
        setShowItemsModalComponent(true);
    }

    function getAllCustomers() {
        let customers = allCustomers.map(customer => {
            let item = {
                id: customer.code,
                name: customer.name
            }
            return item
        });
        
        return customers;
    }
      
    function customerMenuCb (selectedItem) {
        setSelectedCustomer(selectedItem);
    }

    function formatInvoiceDate(selectedDate) {
        let custom = `${selectedDate.getDate()}/${selectedDate.getMonth()+1}/${selectedDate.getFullYear()}`;
        setInvoiceDate(custom)
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

    return (
        <Provider>
            <SafeAreaProvider style={styles.container}>
                <View style={styles.addInvoiceContainer}>
                    <View style={styles.customerGroup}>
                        <MenuComponent 
                            title={selectedCustomer.name || "Select Customer"}
                            items={getAllCustomers()}
                            onSelect={customerMenuCb}
                            key={"customerMenu"}
                            customStyle={{marginBottom: 10}}
                        />
                        <Button onPress={handleAddCustomer} style={{alignContent: 'center', marginBottom: 10, marginLeft: 10, backgroundColor: '#f3f3f3'}}>Add</Button>
                    </View>
                    <TextInput
                        label={"Date"}
                        value={invoiceDate || formatInvoiceDate(new Date())}
                        style={{width: 350, height: 40, marginBottom: 10}}
                        mode={'outlined'}
                        onFocus={showDatepicker}
                    />
                    {show && (
                        <DateTimePicker
                            value={date}
                            mode={'date'}
                            onChange={onChange}
                        />
                    )}
                    <Button onPress={handleAddItems} style={{maxWidth: 350, marginBottom: 10}}>Add Items</Button>
                    <AddInvoiceItemComponent showModal={showItemsModalComponent} />
                    <AddCustomerComponent showModal={showCustomerModalComponent} />
                </View>
            </SafeAreaProvider>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 20,
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center'
    },
    customerGroup: {
        flexDirection: 'row'
    },
    addInvoiceContainer: {
        flex: 1
    }
});

export default AddInvoiceScreen;