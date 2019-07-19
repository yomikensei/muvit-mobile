import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
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

class SignupForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <View style={styles.container}>
        <Field name="name" component={TextInput} label="Name" returnKeyType="next" autoFocus />
        <Field
          name="email"
          component={TextInput}
          label="Email"
          keyboardType="email-address"
          returnKeyType="next"
        />
        <Field
          name="prepass"
          component={TextInput}
          label="Password"
          secureTextEntry
          returnKeyType="next"
        />
        <Field
          name="confirmation"
          component={TextInput}
          label="Confirm Password"
          secureTextEntry
          returnKeyType="next"
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.text_button}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default reduxForm({
  form: 'signupForm',
})(SignupForm);
