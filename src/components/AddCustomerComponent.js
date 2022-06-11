import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Modal, Portal, TextInput } from 'react-native-paper';

function AddCustomerComponent(props) {
    const [customerName, setCustomerName] = useState("");
    const [customerAddress, setCustomerAddress] = useState("");
    const [customerArea, setCustomerArea] = useState("");
    const [customerCity, setCustomerCity] = useState("");
    const [customerPhone, setCustomerPhone] = useState("");
    const [modalVisible, setModalVisible] = useState(props.showModal);
    
    const hideModal = () => {
        setModalVisible(false);
    }

    function handleAddCustomer() {
        console.log("Customer Added");
    }

    return (
        <View style={styles.container}>
            <Portal>
                <Modal visible={props.showModal} onDismiss={hideModal} contentContainerStyle={styles.container}>
                    <View>
                        <TextInput style={styles.input}
                            label={"Customer Name"}
                            value={customerName}
                            mode={'outlined'}
                            onChangeText={customerName => setCustomerName(customerName)}
                        />
                        <TextInput style={styles.input}
                            label={"Address"}
                            value={customerAddress}
                            mode={'outlined'}
                            onChangeText={customerAddress => setCustomerAddress(customerAddress)}
                            numberOfLines={3}
                        />
                        <TextInput style={styles.input}
                            label={"Area Name"}
                            value={customerArea}
                            mode={'outlined'}
                            onChangeText={customerArea => setCustomerArea(customerArea)}
                        />
                        <TextInput style={styles.input}
                            label={"City"}
                            value={customerCity}
                            mode={'outlined'}
                            onChangeText={customerCity => setCustomerCity(customerCity)}
                        />
                        <TextInput style={styles.input}
                            label={"Phone"}
                            value={customerPhone}
                            mode={'outlined'}
                            onChangeText={customerPhone => setCustomerPhone(customerPhone)}
                            keyboardType={'numeric'}
                        />
                        <Button onPress={handleAddCustomer}>Save</Button>
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

export default AddCustomerComponent;