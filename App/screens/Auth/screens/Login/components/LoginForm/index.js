import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import TextInput from '../../../../../../components/TextInput';
import colors from '../../../../../../constants/colors.json';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '80%',
  },
  button: {
    backgroundColor: colors.primary,
    color: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 7,
    elevation: 20,
    width: 180,
    height: 50,
  },
  text_button: {
    color: '#ffffff',
    paddingHorizontal: 10,
    textAlignVertical: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

class LoginForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <View style={styles.container}>
        <Field
          name="email"
          component={TextInput}
          label="Email"
          keyboardType="email-address"
          returnKeyType="next"
          autoFocus
        />
        <Field
          name="password"
          component={TextInput}
          label="Password"
          secureTextEntry
          returnKeyType="next"
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.text_button}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default reduxForm({
  form: 'loginForm',
})(LoginForm);
