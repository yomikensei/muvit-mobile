/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import { CreditCardInput, LiteCreditCardInput } from 'react-native-credit-card-input';

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10,
  },
  labelStyle: {
    fontFamily: 'Raleway-Bold',
  },
  inputStyle: {
    fontFamily: 'Raleway-SemiBold',
  },
});


const CardInput = (props) => {
  const { input: { onChange, onFocus } } = props;
  return (
    <CreditCardInput
      cardFontFamily="Raleway-SemiBold"
      onChange={onChange}
      onFocus={onFocus}
      labelStyle={styles.labelStyle}
      inputStyle={styles.inputStyle}
    />
  );
};

export default CardInput;
