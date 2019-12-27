import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { RegularText, BoldText } from 'components/Text';
import { RFValue } from 'react-native-responsive-fontsize';

export default ({ card_type, bank, last4, backgroundColor }) => {
  return (
    <View
      style={{
        width: '100%',
        height: RFValue(88),
        backgroundColor,
        borderRadius: RFValue(10),
        paddingEnd: RFValue(13.49),
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingStart: RFValue(22),
        marginBottom: RFValue(14),
      }}
    >
      <TouchableOpacity>
        <Image
          source={require('../../../../../../assets/icons/exit2.png')}
          style={{ width: RFValue(20), height: RFValue(20) }}
        />
      </TouchableOpacity>
      <View>
        <BoldText customstyle={{ color: '#FFF', fontSize: RFValue(25) }}>
          {`**** **** **** ${last4}`}
        </BoldText>
        <RegularText customstyle={{ color: '#FFF', fontSize: RFValue(14) }}>{bank}</RegularText>
        <RegularText customstyle={{ color: '#FFF', fontSize: RFValue(14) }}>
          {card_type.toUpperCase()}
        </RegularText>
      </View>
    </View>
  );
};
