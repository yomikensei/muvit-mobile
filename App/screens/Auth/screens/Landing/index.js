/* eslint-disable global-require */
import React from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { BoldText, MediumText } from 'components/Text';
import BaseStyles from 'theme/base';
import { RFValue } from 'react-native-responsive-fontsize';

export default props => {
  const {
    navigation: { navigate },
  } = props;
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
};
