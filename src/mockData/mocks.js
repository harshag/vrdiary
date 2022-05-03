const employee = [
    {
        "emp_code": 1,
        "emp_name": "Kunal",
        "city": "Coimbatore",
        "mobile_no": "+919632587412"    
    },
    {
        "emp_code": 2,
        "emp_name": "Vignesh",
        "city": "Coimbatore",
        "mobile_no": "+919632587412"    
    }
];

const customers = [
    {
        "customer_code": 1,
        "emp_code": 1,
        "mobile_no": "+919848484938",
        "name": "Customer 1",
        "address": "12",
        "area_name": "gingee",
        "city": "Gingee",
        "active": true
    },
    {
        "customer_code": 2,
        "emp_code": 1,
        "mobile_no": "+919848484938",
        "name": "Customer 2",
        "address": "12",
        "area_name": "gingee",
        "city": "Gingee",
        "active": true
    }
];

const customerInvoices = {
    "customer_code": 1,
    "emp_code": 1,
    "invoices": [
        {
            "id": 2,
            "date": "2022-04-24"
        },
        {
            "id": 3,
            "date": "2022-04-25"
        },
        {
            "id": 4,
            "date": "2022-04-26"
        }
    ]
};

const invoiceDetails = {
    "id": 1,
    "items": [
        {
            "name": "Milk",
            "price": 40,
            "purchase_quantity": 10,
            "free_quantity": 1,
            "tax_type": "Inclusive",
            "tax_percent": 10
        }
    ],
    "amount_received": 100,
    "total_amount": 500
}