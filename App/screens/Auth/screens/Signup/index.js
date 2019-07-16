import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SignupForm from './components/SignupForm';
import colors from '../../../../constants/colors.json';

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
  submitSignup = (values) => {
    const {
      navigation: { navigate },
    } = this.props;
    console.log(values);
    navigate('DeliveryTask');
  };

  render() {
    const {
      navigation: { navigate },
    } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Create an account.</Text>
        <View style={styles.section_form}>
          <SignupForm onSubmit={this.submitSignup} />
        </View>
        <TouchableOpacity onPress={() => navigate('Login')}>
          <Text style={styles.linkText}>Already have an account?</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Signup;
