import { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, Modal, Portal, TextInput } from 'react-native-paper';
import AppConstants from '../../AppConstants';

import MenuComponent from './MenuComponent';
import * as restClient from '../lib/restclient';

function AddInvoiceItemComponent(props) {
    const [selectedItem, setSelectedItem] = useState({});
    const [itemPrice, setItemPrice] = useState("");
    const [qty, setQty] = useState("");
    const [freeQty, setFreeQty] = useState("");
    const [modalVisible, setModalVisible] = useState(props.showModal);
    const [errorMessage, setErrorMessage] = useState("");

    const [items, setItems] = useState([]);
    
    const hideModal = () => {
        props.showModal(false);
        setSelectedItem({});
    }

    useEffect(() => {
        restClient.getAllItems()
          .then((items) => {
            let mappedItems = items.map(item => {
                return {
                    ...item,
                    id: item.item_code,
                    name: item.item_name
                }
            });
            setItems(mappedItems);
          });
    }, []);
      
    function itemsMenuCb (selectedItem) {
        setSelectedItem(selectedItem);
        setItemPrice(selectedItem.price.toString());
    }

    function handleAddItem() {
        if (selectedItem.name === "" || qty === "") {
            setErrorMessage("Enter all values");
            return;
        }
        let totalAmount = selectedItem.price * qty;
        let taxType = selectedItem.tax_code?.tax_type;
        if (taxType?.toLowerCase() === 'exclusive') {
            totalAmount = totalAmount + ((totalAmount * selectedItem.tax_code?.tax_percent) / 100);
        } 
        props.addItems({
            item: {
                ...selectedItem
            },
            quantity: qty,
            free_quantity: freeQty,
            price: selectedItem.price,
            amount: totalAmount
        });

        hideModal();
    }

    return (
        <View style={styles.container}>
            <Portal>
                <Modal dismissable={false} visible={props.visible} onDismiss={hideModal} contentContainerStyle={styles.container}>
                    <View>
                        <MenuComponent 
                            title={selectedItem.name || "Select Item"}
                            items={items}
                            onSelect={itemsMenuCb}
                            key={"itemMenu"}
                            customStyle={{marginBottom: 10}}
                        />
                        <TextInput style={styles.input}
                            label={"Unit Price"}
                            value={itemPrice}
                            mode={'outlined'}
                            editable={false}
                            selectTextOnFocus={false}
                        />
                        <TextInput style={styles.input}
                            label={"Quantity"}
                            value={qty.toString()}
                            onChangeText={qty => setQty(qty)}
                            keyboardType='numeric'
                            mode={'outlined'}
                        />
                        <TextInput style={styles.input}
                            label={"Free Quantity"}
                            value={freeQty.toString()}
                            onChangeText={freeQty => setFreeQty(freeQty)}
                            keyboardType='numeric'
                            mode={'outlined'}
                        />
                        <View style={styles.formButtons}>
                            <Button color={AppConstants.buttonColor} onPress={handleAddItem}>Add</Button>
                            <Button color={AppConstants.buttonColor} onPress={hideModal}>Cancel</Button>
                        </View>
                        <Text style={{color: "tomato"}}>{errorMessage}</Text>
                    </View>
                </Modal>
            </Portal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 20
    },
    input: {
        marginTop: 10,
        marginBottom: 10
    },
    formButtons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 5
    }
});

export default AddInvoiceItemComponent;