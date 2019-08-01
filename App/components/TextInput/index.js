import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Item, Input, Label } from 'native-base';

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10,
  },
});

const TextInput = (props) => {
  const { label, input: { onChange, onBlur, onFocus }, ...rest } = props;
  return (
    <View style={styles.inputContainer}>
      <Item floatingLabel>
        <Label>{label}</Label>
        <Input
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          {...rest}
        />
      </Item>
    </View>
  );
};
export default TextInput;
