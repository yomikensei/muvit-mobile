import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SignupForm from './components/SignupForm';

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

class Signup extends Component {
  constructor(props) {
    super(props);
    this.submitSignup = this.submitSignup.bind(this);
  }

  submitSignup(values) {
    const { navigation: { navigate } } = this.props;
    console.log(values);
    navigate('Home');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Signup Page
        </Text>
        <View style={styles.section_form}>
          <SignupForm onSubmit={this.submitSignup} />
        </View>
      </View>
    );
  }
}

export default Signup;
