import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textField: {
    height: 40,
    backgroundColor: '#F8F4FF',
    borderRadius: 7,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginVertical: 2,
    fontFamily: 'Raleway-Medium',
  },
});

export default class TextField extends Component {
  focus() {
    this.textField.focus();
  }

  render() {
    const {
      label,
      input: { value, onChange, onBlur, onFocus },
      enabled,
      ...rest
    } = this.props;
    return (
      <TextInput
        ref={(el) => {
          this.textField = el;
        }}
        style={styles.textField}
        editable
        keyboardType="numeric"
        onChangeText={text => onChange(text)}
        onBlur={text => onBlur(text)}
        onFocus={text => onFocus(text)}
        value={value}
        label={label}
        {...rest}
      />
    );
  }
}
