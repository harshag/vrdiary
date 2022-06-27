import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Modal, Portal, TextInput, Text } from 'react-native-paper';
import * as restClient from '../lib/restclient';

function AddCustomerComponent(props) {
    const [customerName, setCustomerName] = useState("");
    const [customerAddress, setCustomerAddress] = useState("");
    const [customerArea, setCustomerArea] = useState("");
    const [customerCity, setCustomerCity] = useState("");
    const [customerPhone, setCustomerPhone] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    
    const resetForm = () => {
        setCustomerName("");
        setCustomerAddress("");
        setCustomerArea("");
        setCustomerCity("");
        setCustomerPhone("");
        setErrorMessage("");
    };

    const hideModal = () => {
        props.showModal(false);
        resetForm();
    };

    async function handleAddCustomer() {
        let reqBody = {
            "name": customerName,
            "address": customerAddress,
            "area_name": customerArea,
            "city": customerCity,
            "mobile_no": customerPhone
        }
        try {
            let res = await restClient.createCustomer(reqBody);
            let customerObj = {
                ...res.data,
                id: res.code
            }
            props.returnCustomer(customerObj);
            hideModal();
        } catch(error) {
            if(error.response.status === 400) {
                setErrorMessage("Please enter all values");
            }
            console.log("Error creating customer: ", error);
        }
    }

    return (
        <View style={styles.container}>
            <Portal>
                <Modal dismissable={false} visible={props.visible} onDismiss={hideModal} contentContainerStyle={styles.container}>
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
                        <Text style={{color: "tomato"}}>{errorMessage}</Text>
                        <View style={styles.formButtons}>
                            <Button onPress={handleAddCustomer}>Add</Button>
                            <Button onPress={hideModal}>Cancel</Button>
                        </View>
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

export default AddCustomerComponent;