/* eslint-disable global-require */
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as Animatable from 'react-native-animatable';
import { BoldText, MediumText } from 'components/Text';
import BaseStyles from 'theme/base';
import { RFValue } from 'react-native-responsive-fontsize';
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
    // fontFamily: 'ProximaNovaAltBold',
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
    elevation: 5,
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
      <ImageBackground
        source={require('../../../../assets/images/bg-landing.jpg')}
        style={{
          flex: 1,
          paddingHorizontal: RFValue(30),
          paddingTop: RFValue(36),
          justifyContent: 'space-between',
        }}
      >
        <BoldText customstyle={{ color: '#FFF', fontSize: RFValue(30), textAlign: 'center' }}>
          Muvit
        </BoldText>
        <View style={{ marginBottom: RFValue(66) }}>
          <Animatable.View
            duration={500}
            animation="slideInLeft"
            style={{ width: '100%', marginBottom: RFValue(17) }}
          >
            <TouchableOpacity
              onPress={() => navigate('Signup')}
              style={{ ...BaseStyles.button, backgroundColor: '#FFF' }}
            >
              <MediumText>Get Started</MediumText>
            </TouchableOpacity>
          </Animatable.View>
          <Animatable.View duration={500} animation="slideInRight" style={{ width: '100%' }}>
            <TouchableOpacity onPress={() => navigate('Login')} style={BaseStyles.button}>
              <MediumText customstyle={{ color: '#FFF' }}>Login</MediumText>
            </TouchableOpacity>
          </Animatable.View>
        </View>
      </ImageBackground>
    );
  }
}

export default Landing;
