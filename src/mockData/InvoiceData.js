const allInvoices = [
    {
        "employee": 1,
        "customer": 1,
        "invoice_id": 2,
        "invoice_date": "2022-04-24",
        "mobile_no": "+917339620455",
        "total": "80.50",
        "amount_received": "0.00"
    },
    {
        "employee": 1,
        "customer": 1,
        "invoice_id": 3,
        "invoice_date": "2022-04-24",
        "mobile_no": "+919344041963",
        "total": "1630.00",
        "amount_received": "0.00"
    },
    {
        "employee": 1,
        "customer": 1,
        "invoice_id": 4,
        "invoice_date": "2022-04-25",
        "mobile_no": "+917339620455",
        "total": "41.00",
        "amount_received": "0.00"
    },
    {
        "employee": 1,
        "customer": 1,
        "invoice_id": 5,
        "invoice_date": "2022-05-01",
        "mobile_no": "+917339620455",
        "total": "2109.00",
        "amount_received": "40.00"
    },
    {
        "employee": 1,
        "customer": 1,
        "invoice_id": 10,
        "invoice_date": "2022-05-14",
        "mobile_no": "+917339620455",
        "total": "4000.00",
        "amount_received": "1000.00"
    }
]

const invoiceItems = [
    {
        "sales_invoice": 3,
        "item": {
            "item_code": 1,
            "category_type": {
                "category_code": 1,
                "category_name": "Milk Product"
            },
            "unit_code": {
                "unit_id": 2,
                "unit_code": "No",
                "unit_desc": "No"
            },
            "tax_code": {
                "tax_code": 1,
                "tax_type": "Inclusive",
                "tax_name": "GST 10%",
                "tax_percent": "10.00"
            },
            "price": 40.0,
            "item_name": "Curd 1000ml",
            "conversion_number": "1.00",
            "hsn_code": "485366",
            "active": true
        },
        "quantity": "10.00",
        "free_quantity": "0.00",
        "amount": "400.00",
        "price": "40.00"
    },
    {
        "sales_invoice": 3,
        "item": {
            "item_code": 2,
            "category_type": {
                "category_code": 1,
                "category_name": "Milk Product"
            },
            "unit_code": {
                "unit_id": 2,
                "unit_code": "No",
                "unit_desc": "No"
            },
            "tax_code": {
                "tax_code": 1,
                "tax_type": "Inclusive",
                "tax_name": "GST 10%",
                "tax_percent": "10.00"
            },
            "price": 41.0,
            "item_name": "Cow Milk 1000ml",
            "conversion_number": "1.00",
            "hsn_code": "232344",
            "active": true
        },
        "quantity": "30.00",
        "free_quantity": "0.00",
        "amount": "1230.00",
        "price": "41.00"
    },
    {
        "sales_invoice": 4,
        "item": {
            "item_code": 2,
            "category_type": {
                "category_code": 1,
                "category_name": "Milk Product"
            },
            "unit_code": {
                "unit_id": 2,
                "unit_code": "No",
                "unit_desc": "No"
            },
            "tax_code": {
                "tax_code": 1,
                "tax_type": "Inclusive",
                "tax_name": "GST 10%",
                "tax_percent": "10.00"
            },
            "price": 41.0,
            "item_name": "Cow Milk 1000ml",
            "conversion_number": "1.00",
            "hsn_code": "232344",
            "active": true
        },
        "quantity": "2.00",
        "free_quantity": "1.00",
        "amount": "41.00",
        "price": "41.00"
    },
    {
        "sales_invoice": 5,
        "item": {
            "item_code": 2,
            "category_type": {
                "category_code": 1,
                "category_name": "Milk Product"
            },
            "unit_code": {
                "unit_id": 2,
                "unit_code": "No",
                "unit_desc": "No"
            },
            "tax_code": {
                "tax_code": 1,
                "tax_type": "Inclusive",
                "tax_name": "GST 10%",
                "tax_percent": "10.00"
            },
            "price": 41.0,
            "item_name": "Cow Milk 1000ml",
            "conversion_number": "1.00",
            "hsn_code": "232344",
            "active": true
        },
        "quantity": "50.00",
        "free_quantity": "0.00",
        "amount": "2050.00",
        "price": "41.00"
    },
    {
        "sales_invoice": 5,
        "item": {
            "item_code": 4,
            "category_type": {
                "category_code": 1,
                "category_name": "Milk Product"
            },
            "unit_code": {
                "unit_id": 1,
                "unit_code": "Ltrs",
                "unit_desc": "Ltrs"
            },
            "tax_code": {
                "tax_code": 1,
                "tax_type": "Inclusive",
                "tax_name": "GST 10%",
                "tax_percent": "10.00"
            },
            "price": 100.0,
            "item_name": "Milk 500 ml",
            "conversion_number": "1.00",
            "hsn_code": "AD5778",
            "active": true
        },
        "quantity": "1.00",
        "free_quantity": "0.00",
        "amount": "100.00",
        "price": "100.00"
    },
    {
        "sales_invoice": 10,
        "item": {
            "item_code": 1,
            "category_type": {
                "category_code": 1,
                "category_name": "Milk Product"
            },
            "unit_code": {
                "unit_id": 2,
                "unit_code": "No",
                "unit_desc": "No"
            },
            "tax_code": {
                "tax_code": 1,
                "tax_type": "Inclusive",
                "tax_name": "GST 10%",
                "tax_percent": "10.00"
            },
            "price": 40.0,
            "item_name": "Curd 1000ml",
            "conversion_number": "1.00",
            "hsn_code": "485366",
            "active": true
        },
        "quantity": "100.00",
        "free_quantity": "0.00",
        "amount": "4000.00",
        "price": "40.00"
    },
    {
        "sales_invoice": 11,
        "item": {
            "item_code": 5,
            "category_type": {
                "category_code": 1,
                "category_name": "Milk Product"
            },
            "unit_code": {
                "unit_id": 2,
                "unit_code": "No",
                "unit_desc": "No"
            },
            "tax_code": {
                "tax_code": 1,
                "tax_type": "Inclusive",
                "tax_name": "GST 10%",
                "tax_percent": "10.00"
            },
            "price": 50.0,
            "item_name": "Butter Milk 1000ml",
            "conversion_number": "1.00",
            "hsn_code": "432421",
            "active": true
        },
        "quantity": "20.00",
        "free_quantity": "0.00",
        "amount": "1000.00",
        "price": "50.00"
    }
]

const allCustomers = [
    {
        "code": 1,
        "mobile_no": "+919848484938",
        "name": "Vr local gingee",
        "address": "12",
        "area_name": "gingee",
        "city": "Gingee",
        "active": true,
        "employee_no": null
    },
    {
        "code": 35,
        "mobile_no": "+911234567890",
        "name": "Kutti",
        "address": "trst",
        "area_name": "Trichi",
        "city": "Trchi",
        "active": true,
        "employee_no": 2
    },
    {
        "code": 34,
        "mobile_no": "+919874563214",
        "name": "Babu",
        "address": "Coimbatore local",
        "area_name": "Near Bustand",
        "city": "Coimbatore",
        "active": true,
        "employee_no": 2
    },
    {
        "code": 36,
        "mobile_no": "+917894561236",
        "name": "Rajesh Kannan",
        "address": "ter",
        "area_name": "sfsd",
        "city": "Chennai",
        "active": true,
        "employee_no": 1
    }
]

const allItems = [
    {
        "item_code": 1,
        "category_type": {
            "category_code": 1,
            "category_name": "Milk Product"
        },
        "unit_code": {
            "unit_id": 2,
            "unit_code": "No",
            "unit_desc": "No"
        },
        "tax_code": {
            "tax_code": 1,
            "tax_type": "Inclusive",
            "tax_name": "GST 10%",
            "tax_percent": "10.00"
        },
        "price": 40.0,
        "item_name": "Curd 1000ml",
        "conversion_number": "1.00",
        "hsn_code": "485366",
        "active": true
    },
    {
        "item_code": 2,
        "category_type": {
            "category_code": 1,
            "category_name": "Milk Product"
        },
        "unit_code": {
            "unit_id": 2,
            "unit_code": "No",
            "unit_desc": "No"
        },
        "tax_code": {
            "tax_code": 1,
            "tax_type": "Inclusive",
            "tax_name": "GST 10%",
            "tax_percent": "10.00"
        },
        "price": 41.0,
        "item_name": "Cow Milk 1000ml",
        "conversion_number": "1.00",
        "hsn_code": "232344",
        "active": true
    },
    {
        "item_code": 4,
        "category_type": {
            "category_code": 1,
            "category_name": "Milk Product"
        },
        "unit_code": {
            "unit_id": 1,
            "unit_code": "Ltrs",
            "unit_desc": "Ltrs"
        },
        "tax_code": {
            "tax_code": 1,
            "tax_type": "Inclusive",
            "tax_name": "GST 10%",
            "tax_percent": "10.00"
        },
        "price": 100.0,
        "item_name": "Milk 500 ml",
        "conversion_number": "1.00",
        "hsn_code": "AD5778",
        "active": true
    },
    {
        "item_code": 5,
        "category_type": {
            "category_code": 1,
            "category_name": "Milk Product"
        },
        "unit_code": {
            "unit_id": 2,
            "unit_code": "No",
            "unit_desc": "No"
        },
        "tax_code": {
            "tax_code": 1,
            "tax_type": "Inclusive",
            "tax_name": "GST 10%",
            "tax_percent": "10.00"
        },
        "price": 50.0,
        "item_name": "Butter Milk 1000ml",
        "conversion_number": "1.00",
        "hsn_code": "432421",
        "active": true
    }
]

export { allItems, allInvoices, invoiceItems, allCustomers };