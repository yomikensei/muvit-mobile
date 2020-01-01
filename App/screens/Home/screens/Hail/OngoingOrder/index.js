import React from 'react';
import { View } from 'react-native';
import { RegularText } from 'components/Text';
import DashNav from 'components/DashNav';
import BaseStyles from 'theme/base';

export default () => (
  <View style={BaseStyles.background}>
    <DashNav title="Ongoing Order" />
    <RegularText>Searching for driver</RegularText>
  </View>
);
