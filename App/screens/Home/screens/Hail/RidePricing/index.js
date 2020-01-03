import React, {useState} from 'react';
import {MediumText, RegularText} from 'components/Text';
import {ActivityIndicator, TouchableOpacity, View} from 'react-native';
import BaseStyles from 'theme/base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Snackbar from 'react-native-snackbar';
import {RFValue} from 'react-native-responsive-fontsize';
import {currencyFormatter} from 'util';
import api from 'services/api';

export default ({ details, navigation: { navigate } }) => {
  const [isLoading, setIsLoading] = useState(false);

  const orderRide = async () => {
    setIsLoading(true);
    try {
      const { data } = await api({
        url: '/ride',
        method: 'POST',
        data: {
          ...details,
          payment_method: 'cash',
        },
      });
      navigate('Searching');
    } catch (e) {
      console.log(e.response ? e.response : e);
      let message = 'Failed to order ride, please try again later';
      if (e.response)
        if (e.response.data) if (e.response.data.message) message = e.response.data.message;
      Snackbar.show({
        title: message,
        duration: Snackbar.LENGTH_LONG,
      });
    }
    setIsLoading(false);
  };

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
      <TouchableOpacity
        style={{
          ...BaseStyles.button,
        }}
        disabled={isLoading}
        onPress={orderRide}
      >
        {isLoading ? (
          <ActivityIndicator size={25} color="#FFF" />
        ) : (
          <MediumText customstyle={{ color: '#FFF' }}>Order Ride </MediumText>
        )}
      </TouchableOpacity>
    </View>
  );
};
