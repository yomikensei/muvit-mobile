/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createDeliveryRequest } from 'services/deliveries/actions';

class ViewDeliveryPricing extends PureComponent {
  render() {
    // eslint-disable-next-line no-shadow
    const { createDeliveryRequest } = this.props;
    return (
      <View>
        <Text>
          Hello
        </Text>
      </View>
    );
  }
}


export default connect(null, { createDeliveryRequest })(ViewDeliveryPricing);
