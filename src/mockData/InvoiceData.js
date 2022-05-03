const invoiceData = [
    {
        id: 1,
        name: "Milk",
        price: 25,
        qty: 10,
        discount: 10.00,
        tax: 18.00
    },
    {
        id: 2,
        name: "Curd",
        price: 10,
        qty: 15,
        discount: 5.00,
        tax: 12.00
    },
    {
        id: 3,
        name: "Exclusive Milk",
        price: 40,
        qty: 5,
        discount: 15.00,
        tax: 5.00
    },
    {
        id: 4,
        name: "Skimmed Milk",
        price: 30,
        qty: 8,
        discount: 0.00,
        tax: 10.00
    },
    {
        id: 5,
        name: "Whole Milk",
        price: 35,
        qty: 20,
        discount: 5.00,
        tax: 18.00
    },
    {
        id: 6,
        name: "Large Curd",
        price: 50,
        qty: 2,
        discount: 8.00,
        tax: 5.00
    },
    {
        id: 7,
        name: "Organic Milk",
        price: 45,
        qty: 10,
        discount: 10.00,
        tax: 24.00
    },
];

const allInvoiceDetails = [
    {
        "employee": {
            "emp_code": 1,
            "emp_name": "Kunal",
            "city": "Coimbatore",
            "mobile_no": "+919632587412"
        },
        "customer": {
            "code": 1,
            "mobile_no": "+919848484938",
            "name": "Customer 1",
            "address": "12",
            "area_name": "gingee",
            "city": "Gingee",
            "active": true
        },
        "invoice_id": 2,
        "invoice_date": "2022-04-24",
        "mobile_no": "+917339620455"
    },
    {
        "employee": {
            "emp_code": 1,
            "emp_name": "Kunal",
            "city": "Coimbatore",
            "mobile_no": "+919632587412"
        },
        "customer": {
            "code": 2,
            "mobile_no": "+919848484938",
            "name": "Customer 2",
            "address": "12",
            "area_name": "gingee",
            "city": "Gingee",
            "active": true
        },
        "invoice_id": 3,
        "invoice_date": "2022-04-24",
        "mobile_no": "+919344041963"
    },
    {
        "employee": {
            "emp_code": 1,
            "emp_name": "Kunal",
            "city": "Coimbatore",
            "mobile_no": "+919632587412"
        },
        "customer": {
            "code": 3,
            "mobile_no": "+919848484938",
            "name": "Customer 3",
            "address": "12",
            "area_name": "gingee",
            "city": "Gingee",
            "active": true
        },
        "invoice_id": 4,
        "invoice_date": "2022-04-25",
        "mobile_no": "+917339620455"
    }
];

const invoiceItems = [
    {
        "sales_invoice": 1,
        "item": {
            "item_code": 2,
            "category_type": {
                "category_code": 2,
                "category_name": "Curd"
            },
            "unit_code": {
                "unit_id": 1,
                "unit_code": "Liters",
                "unit_desc": "1000 ml"
            },
            "tax_code": {
                "tax_code": 2,
                "tax_type": "Exclusive",
                "tax_name": "MilkExclusive",
                "tax_percent": "18.00"
            },
            "item_name": "Curd",
            "conversion_number": "1.00",
            "hsn_code": "4543",
            "active": true
        },
        "price": 30,
        "quantity": "1.00",
        "free_quantity": "0.00",
        "plusorminus": "0.00"
    },
    {
        "sales_invoice": 2,
        "item": {
            "item_code": 2,
            "category_type": {
                "category_code": 2,
                "category_name": "Curd"
            },
            "unit_code": {
                "unit_id": 1,
                "unit_code": "Liters",
                "unit_desc": "1000 ml"
            },
            "tax_code": {
                "tax_code": 2,
                "tax_type": "Exclusive",
                "tax_name": "MilkExclusive",
                "tax_percent": "18.00"
            },
            "item_name": "Curd",
            "conversion_number": "1.00",
            "hsn_code": "4543",
            "active": true
        },
        "price": 40,
        "quantity": "1.00",
        "free_quantity": "0.00",
        "plusorminus": "0.00"
    },
    {
        "sales_invoice": 3,
        "item": {
            "item_code": 2,
            "category_type": {
                "category_code": 2,
                "category_name": "Organic Curd"
            },
            "unit_code": {
                "unit_id": 3,
                "unit_code": "Liters",
                "unit_desc": "500 ml"
            },
            "tax_code": {
                "tax_code": 2,
                "tax_type": "Exclusive",
                "tax_name": "OrganicCurd",
                "tax_percent": "18.00"
            },
            "item_name": "Organic Curd",
            "conversion_number": "1.00",
            "hsn_code": "4543",
            "active": true
        },
        "price": 20,
        "quantity": "1.00",
        "free_quantity": "0.00",
        "plusorminus": "0.00"
    },
    {
        "sales_invoice": 4,
        "item": {
            "item_code": 5,
            "category_type": {
                "category_code": 2,
                "category_name": "Organic Milk"
            },
            "unit_code": {
                "unit_id": 1,
                "unit_code": "Liters",
                "unit_desc": "1000 ml"
            },
            "tax_code": {
                "tax_code": 2,
                "tax_type": "Exclusive",
                "tax_name": "OrganicMilk",
                "tax_percent": "18.00"
            },
            "item_name": "Organic Milk",
            "conversion_number": "1.00",
            "hsn_code": "4543",
            "active": true
        },
        "price": 45,
        "quantity": "1.00",
        "free_quantity": "0.00",
        "plusorminus": "0.00"
    },



    {
        "sales_invoice": 5,
        "item": {
            "item_code": 2,
            "category_type": {
                "category_code": 2,
                "category_name": "Curd"
            },
            "unit_code": {
                "unit_id": 1,
                "unit_code": "Liters",
                "unit_desc": "1000 ml"
            },
            "tax_code": {
                "tax_code": 2,
                "tax_type": "Exclusive",
                "tax_name": "MilkExclusive",
                "tax_percent": "18.00"
            },
            "item_name": "Curd",
            "conversion_number": "1.00",
            "hsn_code": "4543",
            "active": true
        },
        "price": 30,
        "quantity": "1.00",
        "free_quantity": "0.00",
        "plusorminus": "0.00"
    },
    {
        "sales_invoice": 6,
        "item": {
            "item_code": 2,
            "category_type": {
                "category_code": 2,
                "category_name": "Curd"
            },
            "unit_code": {
                "unit_id": 1,
                "unit_code": "Liters",
                "unit_desc": "1000 ml"
            },
            "tax_code": {
                "tax_code": 2,
                "tax_type": "Exclusive",
                "tax_name": "MilkExclusive",
                "tax_percent": "18.00"
            },
            "item_name": "Curd",
            "conversion_number": "1.00",
            "hsn_code": "4543",
            "active": true
        },
        "price": 40,
        "quantity": "1.00",
        "free_quantity": "0.00",
        "plusorminus": "0.00"
    },
    {
        "sales_invoice": 7,
        "item": {
            "item_code": 2,
            "category_type": {
                "category_code": 2,
                "category_name": "Organic Curd"
            },
            "unit_code": {
                "unit_id": 3,
                "unit_code": "Liters",
                "unit_desc": "500 ml"
            },
            "tax_code": {
                "tax_code": 2,
                "tax_type": "Exclusive",
                "tax_name": "OrganicCurd",
                "tax_percent": "18.00"
            },
            "item_name": "Organic Curd",
            "conversion_number": "1.00",
            "hsn_code": "4543",
            "active": true
        },
        "price": 20,
        "quantity": "1.00",
        "free_quantity": "0.00",
        "plusorminus": "0.00"
    },
    {
        "sales_invoice": 8,
        "item": {
            "item_code": 5,
            "category_type": {
                "category_code": 2,
                "category_name": "Organic Milk"
            },
            "unit_code": {
                "unit_id": 1,
                "unit_code": "Liters",
                "unit_desc": "1000 ml"
            },
            "tax_code": {
                "tax_code": 2,
                "tax_type": "Exclusive",
                "tax_name": "OrganicMilk",
                "tax_percent": "18.00"
            },
            "item_name": "Organic Milk",
            "conversion_number": "1.00",
            "hsn_code": "4543",
            "active": true
        },
        "price": 45,
        "quantity": "1.00",
        "free_quantity": "0.00",
        "plusorminus": "0.00"
    },

    {
        "sales_invoice": 9,
        "item": {
            "item_code": 2,
            "category_type": {
                "category_code": 2,
                "category_name": "Curd"
            },
            "unit_code": {
                "unit_id": 1,
                "unit_code": "Liters",
                "unit_desc": "1000 ml"
            },
            "tax_code": {
                "tax_code": 2,
                "tax_type": "Exclusive",
                "tax_name": "MilkExclusive",
                "tax_percent": "18.00"
            },
            "item_name": "Curd",
            "conversion_number": "1.00",
            "hsn_code": "4543",
            "active": true
        },
        "price": 30,
        "quantity": "1.00",
        "free_quantity": "0.00",
        "plusorminus": "0.00"
    },
    {
        "sales_invoice": 10,
        "item": {
            "item_code": 2,
            "category_type": {
                "category_code": 2,
                "category_name": "Curd"
            },
            "unit_code": {
                "unit_id": 1,
                "unit_code": "Liters",
                "unit_desc": "1000 ml"
            },
            "tax_code": {
                "tax_code": 2,
                "tax_type": "Exclusive",
                "tax_name": "MilkExclusive",
                "tax_percent": "18.00"
            },
            "item_name": "Curd",
            "conversion_number": "1.00",
            "hsn_code": "4543",
            "active": true
        },
        "price": 40,
        "quantity": "1.00",
        "free_quantity": "0.00",
        "plusorminus": "0.00"
    },
    {
        "sales_invoice": 11,
        "item": {
            "item_code": 2,
            "category_type": {
                "category_code": 2,
                "category_name": "Organic Curd"
            },
            "unit_code": {
                "unit_id": 3,
                "unit_code": "Liters",
                "unit_desc": "500 ml"
            },
            "tax_code": {
                "tax_code": 2,
                "tax_type": "Exclusive",
                "tax_name": "OrganicCurd",
                "tax_percent": "18.00"
            },
            "item_name": "Organic Curd",
            "conversion_number": "1.00",
            "hsn_code": "4543",
            "active": true
        },
        "price": 20,
        "quantity": "1.00",
        "free_quantity": "0.00",
        "plusorminus": "0.00"
    },
    {
        "sales_invoice": 12,
        "item": {
            "item_code": 5,
            "category_type": {
                "category_code": 2,
                "category_name": "Organic Milk"
            },
            "unit_code": {
                "unit_id": 1,
                "unit_code": "Liters",
                "unit_desc": "1000 ml"
            },
            "tax_code": {
                "tax_code": 2,
                "tax_type": "Exclusive",
                "tax_name": "OrganicMilk",
                "tax_percent": "18.00"
            },
            "item_name": "Organic Milk",
            "conversion_number": "1.00",
            "hsn_code": "4543",
            "active": true
        },
        "price": 45,
        "quantity": "1.00",
        "free_quantity": "0.00",
        "plusorminus": "0.00"
    }
];

export  { invoiceData, allInvoiceDetails, invoiceItems };