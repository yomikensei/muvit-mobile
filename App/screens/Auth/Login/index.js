import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginForm from './components/LoginForm';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: '100%',
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
  },
  section_form: {
    top: 100,
    alignItems: 'center',
  },
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.submitLogin = this.submitLogin.bind(this);
  }

  submitLogin(values) {
    const {
      navigation: { navigate },
    } = this.props;
    console.log(values);
    navigate('Home');
  }

  render() {
    // const { navigation: { navigate } } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Login Page</Text>
        <View style={styles.section_form}>
          <LoginForm onSubmit={this.submitLogin} />
        </View>
      </View>
    );
  }
}

export default Login;
