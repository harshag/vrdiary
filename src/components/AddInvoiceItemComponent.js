import { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, Modal, Portal, TextInput } from 'react-native-paper';

import MenuComponent from './MenuComponent';
import { allItems }  from '../mockData/InvoiceData'

function AddInvoiceItemComponent(props) {
    const [selectedItem, setSelectedItem] = useState("");
    const [itemPrice, setItemPrice] = useState("");
    const [qty, setQty] = useState("");
    const [freeQty, setFreeQty] = useState("");
    const [modalVisible, setModalVisible] = useState(props.showModal);
    
    const hideModal = () => {
        setModalVisible(false);
    }

    function getAllItems() {
        let items = allItems.map(item => {
            return {
                id: item.item_code,
                name: item.item_name,
                price: item.price
            }
        });
        
        return items;
    }
      
    function itemsMenuCb (selectedItem) {
        setSelectedItem(selectedItem);
        setItemPrice(selectedItem.price.toString());
    }

    function handleAddItem() {
        console.log("Item Added");
    }

    return (
        <View style={styles.container}>
            <Portal>
                <Modal visible={props.showModal} onDismiss={hideModal} contentContainerStyle={styles.container}>
                    <View>
                        <MenuComponent 
                            title={selectedItem.name || "Select Item"}
                            items={getAllItems()}
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
                        <Button onPress={handleAddItem}>Save</Button>
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
    }
});

export default AddInvoiceItemComponent;