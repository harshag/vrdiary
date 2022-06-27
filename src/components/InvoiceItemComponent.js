import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function InvoiceItemComponent(invoiceItem) {
  let item = invoiceItem;
  let totalPrice = item.invoiceItem.quantity * item.invoiceItem.price;
  
  return (
    <View style={styles.container}>
      <View style={styles.singleInvoiceContainer}>
        <View style={styles.itemTextLeftContainer}>
          <Text style={{...styles.itemText, fontWeight: 'bold', fontSize: 18}}>
            {item.invoiceItem.item.item_name}
          </Text>
        </View>
        <View style={styles.itemTextRightContainer}>
          <Text style={{...styles.itemText, fontWeight: 'bold', fontSize: 18}}>
            {item.invoiceItem.price}
          </Text>
        </View>
        <View style={styles.itemTextLeftContainer}>
          <Text style={styles.itemText}>
            Item Subtotal
          </Text>
        </View>
        <View style={styles.itemTextRightContainer}>
          <Text style={styles.itemText}>
            {item.invoiceItem.quantity} x {item.invoiceItem.price} = {totalPrice}
          </Text>
        </View>
        <View style={styles.itemTextLeftContainer}>
          <Text style={{...styles.itemText, color: 'gold'}}>
            Free Quantity
          </Text>
        </View>
        <View style={styles.itemTextRightContainer}>
          <Text style={{...styles.itemText, color: 'gold'}}>
            {item.invoiceItem.free_quantity}
          </Text>
        </View>
        <View style={styles.itemTextLeftContainer}>
          <Text style={styles.itemText}>
            Tax GST:
          </Text>
        </View>
        <View style={styles.itemTextRightContainer}>
          <Text style={styles.itemText}>
            {item.invoiceItem.item.tax_code.tax_type} {item.invoiceItem.item.tax_code.tax_percent}
          </Text>
        </View>
        <View style={styles.itemTextLeftContainer}>
          <Text style={styles.itemText}>
            Total Amount:
          </Text>
        </View>
        <View style={styles.itemTextRightContainer}>
          <Text style={styles.itemText}>
            {item.invoiceItem.amount}
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  singleInvoiceContainer: {
    backgroundColor: '#f3f3f3',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    marginBottom: 5,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ededed'
  },
  itemTextLeftContainer: {
    width: '60%',
    alignContent: 'flex-start'
  },
  itemTextRightContainer: {
    width: '40%',
    alignItems: 'flex-end'
  },
  itemText: {
    margin: 3,
    fontSize: 15,
    color: '#87888D'
  }
});


export default InvoiceItemComponent;