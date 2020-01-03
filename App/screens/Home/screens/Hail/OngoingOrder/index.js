import React from 'react';
import {View} from 'react-native';
import DashNav from 'components/DashNav';
import BaseStyles from 'theme/base';

export default () => (
  <View style={BaseStyles.background}>
    <DashNav title="Ongoing Order" />
  </View>
);
