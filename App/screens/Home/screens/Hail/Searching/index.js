import React from 'react';
import { View } from 'react-native';
import { RegularText } from 'components/Text';
import DashNav from 'components/DashNav';
import BaseStyles from 'theme/base';

export default ({ navigation }) => (
  <View style={BaseStyles.background}>
    <DashNav navigation={navigation} title="Searching for Driver" />
    <RegularText>Searching for driver</RegularText>
  </View>
);
