import React from 'react';
import {View} from 'react-native';
import {MediumText, RegularText} from 'components/Text';
import {RFValue} from 'react-native-responsive-fontsize';
import moment from 'moment';
import Colors from 'theme/colors';
import {currencyFormatter} from 'util';

export default ({
  location_origin: { name: location_origin },
  location_destination: { name: location_destination },
  createdAt,
  bill,
}) => {
  return (
    <View
      style={{
        width: '100%',
        borderRadius: RFValue(10),
        paddingVertical: RFValue(13),
        paddingHorizontal: RFValue(16),
        marginBottom: RFValue(10),
        backgroundColor: Colors.black,
      }}
    >
      <MediumText customstyle={{ color: '#FFF', fontSize: RFValue(18) }}>
        {`${location_origin} to ${location_destination}`}
      </MediumText>
      <RegularText customstyle={{ color: '#FFF', fontSize: RFValue(14) }}>{`₦ ${currencyFormatter(
        bill
      )}`}</RegularText>
      <RegularText customstyle={{ color: '#FFF', fontSize: RFValue(14) }}>
        {moment(createdAt).format('dddd, MMMM Do YYYY, h:mm a')}
      </RegularText>
    </View>
  );
};
