import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: '100%',
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
  },
  section_buttons: {
    top: 100,
    alignItems: 'center',
  },
  button: {
    width: '80%',
    backgroundColor: '#8447ff',
    borderRadius: 7,
    height: 50,
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 5,
  },
  text_button: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#FFFFFF',
    fontFamily: 'Raleway-Bold',
    fontSize: 18,
  },
});

class Landing extends Component {
  render() {
    const { navigation: { navigate } } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Landing page
        </Text>
        <View style={styles.section_buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigate('Login')}
          >
            <Text style={styles.text_button}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigate('Signup')}
          >
            <Text style={styles.text_button}>
              Signup
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Landing;
