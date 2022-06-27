import axios from "axios";
import * as SecureStore from 'expo-secure-store';

const restClient = axios.create({
    baseURL: "https://vrdairy.herokuapp.com"
});

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

const login = async (username, password) => {
    let apiRequest = {
        username: username.trim(),
        password: password
    };

    const response = await restClient.post('/api/token/', apiRequest);

    return response;
}

async function getCustomers() {
    let customers = []
    let response = {};
    let token = await getToken();
  
    try {
      response = await restClient.get('/api/customer/', {
          headers: {
            Authorization: `Bearer ${token.access}`
          }
      });

      customers = await response.data.map(customer => {
        return {
          id: customer.code,
          name: customer.name,
          phone: customer.mobile_no,
          employeeNo: customer.employee_no
        }
      });
    } catch(error) {
      console.log("getCustomers Error", error);
      throw error;
    }
    
    return customers;
  }
  
async function getAllInvoices(selectedCustomer) {
    let token = await getToken();
    let response = {};
    let invoices = [];

    if(selectedCustomer) {
        try {
            response = await restClient.get(`/api/invoice/?customer=${selectedCustomer.id}`, {
                headers: {
                    Authorization: `Bearer ${token.access}`
            }
        });
        } catch(error) {
            console.log(error);
            throw error;
        }

        if(response.data) {
            invoices = await response.data.map((invoice) => {
                return {
                ...invoice,
                id: invoice.invoice_id,
                name: `Id: ${invoice.invoice_id}, Date: ${invoice.invoice_date}`
                };
            });
        }

        return invoices;
    }
}

async function getOneInvoice(invoiceId) {
    let response = {};
    let invoiceItems = [];

    if(!invoiceId) {
        return;
    }

    let token = await getToken();
    try {
        response = await restClient.get(`/api/invoiceitems/?sales_invoice=${invoiceId}`, {
            headers: {
                Authorization: `Bearer ${token.access}`
            }
        });
    } catch(error) {
        console.log(error);
        throw error;
    }

    if(response.data) {
        invoiceItems = response.data;
    }

    return invoiceItems;
}

async function getAllItems() {
    let response = {};
    let items = [];

    let token = await getToken();
    try {
        response = await restClient.get('/api/item/', {
            headers: {
                Authorization: `Bearer ${token.access}`
            }
        });
    } catch(error) {
        console.log(error);
        throw error;
    }

    if(response.data) {
        items = response.data;
    }

    return items;
}

async function createInvoice (invoiceData) {
    let token = await getToken();
    let response = {}
    try {
        response = await restClient.post('/api/invoice/', invoiceData, {
            headers: {
                Authorization: `Bearer ${token.access}`
            }
        });
        console.log(response);
    } catch(error) {
        console.log(error.response);
        throw error;
    }

    return response;
}

async function createCustomer(data) {
    let customers = []
    let response = {};
    let token = await getToken();
  
    try {
      response = await restClient.post('/api/customer/', data, {
          headers: {
            Authorization: `Bearer ${token.access}`
          }
      });

    } catch(error) {
      console.log("createCustomer Error", error);
      throw error;
    }
    
    return response;
  }
  
export {login, getCustomers, getAllInvoices, getOneInvoice, getAllItems, createInvoice, createCustomer};