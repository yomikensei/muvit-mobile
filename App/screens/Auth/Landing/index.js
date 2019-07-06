/* eslint-disable global-require */
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import colors from '../../../constants/colors.json';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
  },
  section_buttons: {
    marginTop: 30,
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
  },
  text_button: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: colors.primary,
    fontFamily: 'Raleway-Bold',
    fontSize: 30,
  },
});

class Landing extends Component {
  render() {
    const {
      navigation: { navigate },
    } = this.props;
    return (
      <View style={styles.container}>
        <Image source={require('../../../assets/images/muvit.png')} style={styles.image} />
        <Text style={styles.text}>Quick deliveries anytime, anywhere</Text>
        <View style={styles.section_buttons}>
          <TouchableOpacity style={styles.button} onPress={() => navigate('Login')}>
            <Text style={styles.text_button}>Get started</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Landing;
