import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import DashNav from 'components/DashNav';
import BaseStyles from 'theme/base';
import Colors from 'theme/colors';

export default ({ navigation }) => (
  <View style={BaseStyles.background}>
    <DashNav navigation={navigation} title="Searching for Driver" />

    <ActivityIndicator style={{ paddingVertical: 90 }} size={65} color={Colors.black} />
  </View>
);
