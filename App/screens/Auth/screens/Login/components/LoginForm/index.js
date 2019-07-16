import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';
import TextInput from '../../../../../../components/TextInput';
import colors from '../../../../../../constants/colors.json';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '80%',
  },
  button: {
    backgroundColor: colors.primary,
    marginVertical: 10,
    elevation: 0,
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
        <Button full large rounded onPress={handleSubmit} style={styles.button}>
          <Text> Login </Text>
        </Button>
      </View>
    );
  }
}

export default reduxForm({
  form: 'loginForm',
})(LoginForm);
