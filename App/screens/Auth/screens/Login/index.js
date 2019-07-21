/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import LoginForm from './components/LoginForm';
import colors from '../../../../constants/colors.json';
import { loginRequest } from '../../../../services/auth/actions';

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
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }

  login = (values) => {
    if (values.password && values.email) {
      const { loginRequest } = this.props;
      loginRequest({ credentials: values });
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
        <Text style={styles.text}>Welcome back.</Text>
        <View style={styles.section_form}>
          <LoginForm onSubmit={this.login} />
        </View>
        <TouchableOpacity onPress={() => navigate('Signup')}>
          <Text style={styles.linkText}>Don't have an account?</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(null, { loginRequest })(Login);
