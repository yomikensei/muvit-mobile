import React from 'react';
import { StyleSheet, View } from 'react-native';
import CreditCard from 'react-native-credit-card';

const styles = StyleSheet.create({
  view: {
    marginVertical: 10,
  },
  card: {
    alignSelf: 'center',
    height: 170,
    width: 300,
  },
});

const ItemCard = ({ cardColor }) => (
  <View style={styles.view}>
    <CreditCard
      style={{ ...styles.card, backgroundColor: cardColor }}
      type="mastercard"
      number="************6666"
      name="John Doe"
      expiry="0521"
      cvc="123"
      bar
      shiny
    />
  </View>

);

export default ItemCard;
