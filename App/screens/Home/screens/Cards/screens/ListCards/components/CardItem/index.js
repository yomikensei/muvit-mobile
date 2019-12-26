/* eslint-disable camelcase */
import React from "react";
import { StyleSheet, View } from "react-native";
import CreditCard from "react-native-credit-card";
import Icon from "react-native-vector-icons/FontAwesome5";

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    marginVertical: 10,
    flexDirection: 'row',
  },
  card: {
    alignSelf: 'center',
    height: 170,
    width: 300,
    left: 20,
  },
  icon: {
    fontSize: 25,
    marginHorizontal: 10,
    left: 20,
    alignSelf: 'center',
  },
});

const ItemCard = ({ item: { brand, last4, exp_month, exp_year }, cardColor, isSelectedCard, selectCard }) => (
  <View style={styles.view}>
    <CreditCard
      style={{ ...styles.card, backgroundColor: cardColor }}
      type={brand}
      number={`************${last4}`}
      name="XXXX XXXX"
      expiry={`${exp_month}${exp_year.slice(2, 4)}`}
      cvc="XXX"
      bar
      shiny
    />
    <Icon
      onPress={selectCard}
      style={{
        ...styles.icon,
        color: isSelectedCard ? '#82cdff' : 'grey',
      }}
      name="check-circle"
    />
  </View>

);

export default ItemCard;
