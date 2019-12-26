import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Colors from 'theme/colors';

const styles = StyleSheet.create({
  default: {
    fontFamily: 'DMSans-Regular',
    fontSize: RFValue(16),
    color: Colors.black,
  },
});

export default props => {
  const { customstyle, children } = props;
  return (
    <Text style={[styles.default, customstyle]} {...props}>
      {children}
    </Text>
  );
};
