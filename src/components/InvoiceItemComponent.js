import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AppConstants from '../../AppConstants';

function InvoiceItemComponent(invoiceItem) {
  let item = invoiceItem;
  let totalPrice = item.invoiceItem.quantity * item.invoiceItem.price;

  const priceAfterGST = () => {
    let type = item.invoiceItem.item.tax_code.tax_type;
    if (type.toLowerCase() == 'inclusive') return totalPrice;

    return totalPrice + ((totalPrice * item.invoiceItem.item.tax_code.tax_percent) / 100);
  }
  
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
            {AppConstants.currencySymbol}{item.invoiceItem.price}
          </Text>
        </View>
        <View style={styles.itemTextLeftContainer}>
          <Text style={styles.itemText}>
            Item Subtotal
          </Text>
        </View>
        <View style={styles.itemTextRightContainer}>
          <Text style={styles.itemText}>
            {item.invoiceItem.quantity} x {item.invoiceItem.price} = {AppConstants.currencySymbol}{totalPrice}
          </Text>
        </View>
        <View style={styles.itemTextLeftContainer}>
          <Text style={{...styles.itemText, color: '#00A150'}}>
            Free Quantity
          </Text>
        </View>
        <View style={styles.itemTextRightContainer}>
          <Text style={{...styles.itemText, color: '#00A150'}}>
            {item.invoiceItem.free_quantity || 0}
          </Text>
        </View>
        <View style={styles.itemTextLeftContainer}>
          <Text style={styles.itemText}>
            GST: {item.invoiceItem.item.tax_code.tax_type} {item.invoiceItem.item.tax_code.tax_percent}%
          </Text>
        </View>
        <View style={styles.itemTextRightContainer}>
          <Text style={styles.itemText}>
            {AppConstants.currencySymbol}{(totalPrice * item.invoiceItem.item.tax_code.tax_percent) / 100}
          </Text>
        </View>
        <View style={styles.itemTextLeftContainer}>
          <Text style={styles.itemText}>
            Total Amount:
          </Text>
        </View>
        <View style={styles.itemTextRightContainer}>
          <Text style={styles.itemText}>
            {AppConstants.currencySymbol}{priceAfterGST()}
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
    width: '50%',
    alignContent: 'flex-start'
  },
  itemTextRightContainer: {
    width: '50%',
    alignItems: 'flex-end'
  },
  itemText: {
    margin: 3,
    fontSize: 15,
    color: '#87888D'
  }
});


export default InvoiceItemComponent;