import React, {useState} from 'react';
import {ActivityIndicator, TouchableOpacity, View} from 'react-native';
import DashNav from 'components/DashNav';
import BaseStyles from 'theme/base';
import Colors from 'theme/colors';
import Snackbar from 'react-native-snackbar';
import {RFValue} from 'react-native-responsive-fontsize';
import {MediumText} from 'components/Text';
import api from 'services/api';

export default ({
  navigation,
  navigation: {
    state: { params },
  },
}) => {
  const [isCancelLoading, setIsCancelLoading] = useState(false);

  const cancelOrder = async () => {
    setIsCancelLoading(true);
    try {
      await api({
        url: `/${params.type}/cancel/${params.data.id}`,
        method: 'PUT',
      });
      props.navigate('Hail');
      Snackbar.show({
        title: 'Order cancelled successfully',
        duration: Snackbar.LENGTH_LONG,
      });
    } catch (e) {
      console.log(e.response ? e.response : e);
      let message = 'Failed to cancel trip, please try again later';
      if (e.response)
        if (e.response.data) if (e.response.data.message) message = e.response.data.message;
      Snackbar.show({
        title: message,
        duration: Snackbar.LENGTH_LONG,
      });
    }
    setIsCancelLoading(false);
  };

  return (
    <View style={BaseStyles.background}>
      <DashNav navigation={navigation} title="Searching for Driver" />
      <ActivityIndicator style={{ paddingVertical: 90 }} size={65} color={Colors.black} />
      <TouchableOpacity
        onPress={cancelOrder}
        disabled={isCancelLoading}
        style={{
          ...BaseStyles.button,
          marginBottom: RFValue(20),
          backgroundColor: '#F75454',
        }}
      >
        {isCancelLoading ? (
          <ActivityIndicator size={25} color="#FFF" />
        ) : (
          <MediumText customstyle={{ color: '#FFF' }}>Cancel Trip</MediumText>
        )}
      </TouchableOpacity>
    </View>
  );
};
