/* eslint-disable global-require */
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { BoldText, RegularText } from 'components/Text';

export default props => {
  const {
    title,
    navigation: { goBack, navigate },
    info,
  } = props;

  return (
    <View style={{ width: '100%', marginBottom: RFValue(30) }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          marginBottom: RFValue(10),
        }}
      >
        <TouchableOpacity onPress={() => goBack()}>
          <Image
            source={require('../../assets/icons/back.png')}
            style={{ width: RFValue(22), height: RFValue(14) }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <BoldText customstyle={{ fontSize: RFValue(20) }}>{title}</BoldText>
        <TouchableOpacity onPress={() => navigate('Landing')}>
          <Image
            source={require('../../assets/icons/exit.png')}
            style={{ width: RFValue(14), height: RFValue(14) }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <RegularText customstyle={{ color: '#B2B8BD', fontSize: RFValue(12), textAlign: 'center' }}>
        {info}
      </RegularText>
    </View>
  );
};
