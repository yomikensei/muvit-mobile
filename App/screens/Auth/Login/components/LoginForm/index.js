import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import TextInput from '../../../../../components/TextInput';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '80%',
  },
  button: {
    backgroundColor: '#8447ff',
    borderRadius: 7,
    height: 50,
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 5,
    marginTop: 20,
  },
  text_button: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#FFFFFF',
    fontFamily: 'Raleway-Bold',
    fontSize: 18,
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
          placeholder="Email"
          keyboardType="email-address"
          returnKeyType="next"
          autoFocus
        />
        <Field
          name="password"
          component={TextInput}
          label="Email"
          placeholder="Password"
          secureTextEntry
          returnKeyType="next"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit}
        >
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
