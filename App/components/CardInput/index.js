/* eslint-disable no-unused-vars */
import React from 'react';
import { StyleSheet } from 'react-native';
import { CreditCardInput } from 'react-native-credit-card-input';

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10,
  },
  labelStyle: {
    fontFamily: 'DMSans-Bold',
  },
  inputStyle: {
    fontFamily: 'DMSans-Regular',
  },
});

const CardInput = props => {
  const {
    field: { name },
    form: { setFieldValue },
  } = props;
  return (
    <CreditCardInput
      cardFontFamily="DMSans-Regular"
      onChange={e => {
        setFieldValue(name, e);
      }}
      labelStyle={styles.labelStyle}
      inputStyle={styles.inputStyle}
    />
  );
};

export default CardInput;
