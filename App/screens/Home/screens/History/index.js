import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { MediumText } from 'components/Text';
import DashNav from 'components/DashNav';
import Colors from 'theme/colors.json';
import { RFValue } from 'react-native-responsive-fontsize';
import BaseStyles from 'theme/base';
import RidesList from './Rides';
import DeliveriesList from './Deliveries';

export default props => {
  const [tab, setTab] = useState('RIDES');

  const { navigation } = props;

  const fetchRides = async () => {};

  const fetchDeliveries = async () => {};

  useEffect(() => {
    fetchRides();
    fetchDeliveries();
  });

  return (
    <View style={BaseStyles.background}>
      <DashNav navigation={navigation} title="History" />
      <Tabs {...{ tab, setTab }} />
      <ContentControl {...{ tab, fetchRides, fetchDeliveries }} />
    </View>
  );
};

const Tabs = ({ tab, setTab }) => (
  <View style={BaseStyles.tabs}>
    <TouchableOpacity
      onPress={() => setTab('RIDES')}
      style={
        tab === 'RIDES'
          ? { ...BaseStyles.tabButton, backgroundColor: Colors.primary }
          : BaseStyles.tabButton
      }
    >
      <MediumText
        customstyle={
          tab === 'RIDES' ? { fontSize: RFValue(10), color: '#FFF' } : { fontSize: RFValue(10) }
        }
      >
        Rides
      </MediumText>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => setTab('DELIVERIES')}
      style={
        tab === 'DELIVERIES'
          ? { ...BaseStyles.tabButton, backgroundColor: Colors.primary }
          : BaseStyles.tabButton
      }
    >
      <MediumText
        customstyle={
          tab === 'DELIVERIES'
            ? { fontSize: RFValue(10), color: '#FFF' }
            : { fontSize: RFValue(10) }
        }
      >
        Deliveries
      </MediumText>
    </TouchableOpacity>
  </View>
);

const ContentControl = ({ tab }) => {
  switch (tab) {
    case 'RIDES':
      return <RidesList />;

    case 'DELIVERIES':
      return <DeliveriesList />;

    default:
      return <View />;
  }
};
