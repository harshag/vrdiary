import * as SecureStore from 'expo-secure-store';

const getToken = async () => {
    let accessToken = "";
    try {
        const tokens = await SecureStore.getItemAsync('tokens');
        accessToken = JSON.parse(tokens);
    } catch(error) {
        console.log("Error fetching tokens from secure store", error);
    }

    return accessToken;
}

export {getToken}