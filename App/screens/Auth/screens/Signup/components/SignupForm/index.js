import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { View, StyleSheet, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import TextInput from '../../../../../../components/TextInput';
import colors from '../../../../../../constants/colors.json';
import { getSignup } from '../../../../../../services/auth/reducer';

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
    fontFamily: 'Raleway-Bold',
  },
});

class SignupForm extends Component {
  render() {
    const { handleSubmit, signupState: { inProgress } } = this.props;
    return (
      <View style={styles.container}>
        <Field
          name="firstname"
          component={TextInput}
          label="First Name"
          returnKeyType="next"
          autoFocus
        />
        <Field
          name="lastname"
          component={TextInput}
          label="Last Name"
          returnKeyType="next"
        />
        <Field
          name="email"
          component={TextInput}
          label="Email"
          keyboardType="email-address"
          returnKeyType="next"
        />
        <Field
          name="phone"
          component={TextInput}
          label="Phone"
          keyboardType="phone-pad"
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
          returnKeyType="done"
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          {!inProgress ? (
            <Text style={styles.text_button}>
            Sign Up
            </Text>
          ) :
            <ActivityIndicator color="#FFFFFF" size={30} />
          }
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  signupState: getSignup(state),
});

export default connect(mapStateToProps)(reduxForm({
  form: 'signupForm',
})(SignupForm));
