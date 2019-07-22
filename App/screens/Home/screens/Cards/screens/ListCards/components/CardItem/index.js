/* eslint-disable camelcase */
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

const ItemCard = ({ item: { brand, last4, exp_month, exp_year }, cardColor }) => (
  <View style={styles.view}>
    <CreditCard
      style={{ ...styles.card, backgroundColor: cardColor }}
      type={brand}
      number={`************.${last4}`}
      name="XXXX XXXX"
      expiry={`${exp_month}${exp_year.slice(2, 4)}`}
      cvc="XXX"
      bar
      shiny
    />
  </View>

);

export default ItemCard;
