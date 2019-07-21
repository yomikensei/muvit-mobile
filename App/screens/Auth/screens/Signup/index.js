/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import SignupForm from './components/SignupForm';
import colors from '../../../../constants/colors.json';
import { signupRequest } from '../../../../services/auth/actions';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: '100%',
  },
  text: {
    fontSize: 30,
    marginLeft: '10%',
    fontWeight: 'bold',
    color: '#000000',
  },
  section_form: {
    alignItems: 'center',
    marginVertical: 20,
  },
  linkText: {
    color: colors.primary,
    textAlign: 'center',
  },
});

class Signup extends Component {
  constructor(props) {
    super(props);
    this.signup = this.signup.bind(this);
  }

  signup = (values) => {
    const { prepass, confirmation, firstname, lastname, phone, email } = values;
    const { signupRequest } = this.props;
    if (prepass && confirmation && firstname && lastname && phone && email) {
      if (prepass !== confirmation) {
        Alert.alert(
          '',
          'Passwords do not match',
          [],
          { cancelable: true },
        );
      } else signupRequest({ credentials: values });
    } else {
      Alert.alert(
        '',
        'Please ensure all fields on the form are filled',
        [],
        { cancelable: true },
      );
    }
  };

  render() {
    const {
      navigation: { navigate },
    } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Create an account.</Text>
        <View style={styles.section_form}>
          <SignupForm onSubmit={this.signup} />
        </View>
        <TouchableOpacity onPress={() => navigate('Login')}>
          <Text style={styles.linkText}>Already have an account?</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


export default connect(null, { signupRequest })(Signup);
