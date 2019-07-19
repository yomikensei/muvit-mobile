/* eslint-disable global-require */
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../../../../constants/colors.json';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: '100%',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'ProximaNovaAltBold',
  },
  image: {
    width: 300,
    height: 300,
  },
  button: {
    backgroundColor: colors.primary,
    color: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
    top: 20,
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
    fontWeight: 'bold',
  },
  icon_button: {
    textAlignVertical: 'center',
  },
});

class Landing extends Component {
  render() {
    const {
      navigation: { navigate },
    } = this.props;
    return (
      <View style={styles.container}>
        <Image
          source={require('../../../../assets/images/muvit-illustration.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.text}>Quick deliveries anytime, anywhere</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigate('Login')}>
          <Text style={styles.text_button}>
            Get started
          </Text>
          <Icon style={styles.icon_button} name="angle-double-right" size={20} color="white" />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Landing;
