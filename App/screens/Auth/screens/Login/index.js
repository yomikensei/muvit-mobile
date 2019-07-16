import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LoginForm from './components/LoginForm';
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

class Login extends Component {
  submitLogin = (values) => {
    const {
      navigation: { navigate },
    } = this.props;
    console.log(values);
    navigate('Home');
  };

  render() {
    const {
      navigation: { navigate },
    } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome back.</Text>
        <View style={styles.section_form}>
          <LoginForm onSubmit={this.submitLogin} />
        </View>
        <TouchableOpacity onPress={() => navigate('Signup')}>
          <Text style={styles.linkText}>Don't have an account?</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;
