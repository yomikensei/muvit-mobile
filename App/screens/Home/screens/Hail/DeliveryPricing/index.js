import React, { useState } from 'react';
import api from 'services/api';
import { MediumText, RegularText } from 'components/Text';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import BaseStyles from 'theme/base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { RFValue } from 'react-native-responsive-fontsize';
import { currencyFormatter } from 'util';

export default ({ details }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={{ marginTop: RFValue(10) }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginBottom: RFValue(20),
        }}
      >
        <View style={{ justifyContent: 'center', alignContent: 'center' }}>
          <Icon name="money-bill-alt" size={18} />
          <RegularText
            customstyle={{
              fontSize: RFValue(14),
            }}
          >
            {`₦ ${currencyFormatter(details.bill, 2)}`}
          </RegularText>
        </View>
        <View style={{ justifyContent: 'center', alignContent: 'center' }}>
          <Icon name="hourglass-half" size={18} />
          <RegularText
            customstyle={{
              fontSize: RFValue(14),
            }}
          >
            {details.duration}
          </RegularText>
        </View>
        <View style={{ justifyContent: 'center', alignContent: 'center' }}>
          <Icon name="map-marked" size={18} />
          <RegularText
            customstyle={{
              fontSize: RFValue(14),
            }}
          >
            {details.distance}
          </RegularText>
        </View>
      </View>
      <TouchableOpacity style={{ ...BaseStyles.button }} disabled={isLoading}>
        {isLoading ? (
          <ActivityIndicator size={25} color="#FFF" />
        ) : (
          <MediumText customstyle={{ color: '#FFF' }}>Order Ride</MediumText>
        )}
      </TouchableOpacity>
    </View>
  );
};
