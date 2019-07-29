/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { Container } from 'native-base';
import { createDeliveryRequest } from 'services/deliveries/actions';
import AppHeader from 'components/AppHeader';
import { getCreateDelivery } from 'services/deliveries/reducer';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginHorizontal: 25,
  },
  section: {
    marginBottom: 10,
  },
  content: {
    marginVertical: 30,
  },
  header_section: {
    marginBottom: 5,
    fontSize: 16,
    fontFamily: 'Raleway-SemiBold',
  },
  text_section: {

  },
  button: {
    backgroundColor: 'grey',
    color: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 7,
    elevation: 3,
    width: '100%',
    height: 40,
  },
  text_button: {
    color: '#ffffff',
    paddingHorizontal: 10,
    textAlignVertical: 'center',
    fontSize: 16,
    fontFamily: 'Raleway-Bold',
  },
});

class ViewDeliveryPricing extends PureComponent {
  render() {
    const { navigation: { navigate, state: { params: { delivery, details } } }, createDeliveryRequest, createDeliveryState: { inProgress } } = this.props;
    return (
      <Container>
        <AppHeader showBackButton goBack={() => navigate('NewDelivery')} headerText="Confirm Delivery" icon="md-list-box" />
        <View style={styles.container}>
          <View style={styles.content}>
            <View style={styles.section}>
              <Text style={styles.header_section}>
                Pickup Location
              </Text>
              <Text>
                {`${delivery.location_pickup.name} ${delivery.location_pickup.address}`}
              </Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.header_section}>
                Pickup Contact Name
              </Text>
              <Text>
                {delivery.name_pickup}
              </Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.header_section}>
                Pickup Contact Phone
              </Text>
              <Text>
                {delivery.phone_pickup}
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.header_section}>
                Delivery Location
              </Text>
              <Text>
                {`${delivery.location_delivery.name} ${delivery.location_delivery.address}`}
              </Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.header_section}>
                Delivery Contact Name
              </Text>
              <Text>
                {delivery.name_delivery}
              </Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.header_section}>
                Delivery Contact Phone
              </Text>
              <Text>
                {delivery.phone_delivery}
              </Text>
            </View>

            <View style={{ ...styles.section, marginTop: 35 }}>
              <Text style={styles.header_section}>
                Total Fee
              </Text>
              <Text>
                {`₦ ${details.bill}`}
              </Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.header_section}>
                Total Distance
              </Text>
              <Text>
                {details.distance}
              </Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.header_section}>
                Estimated Trip Duration
              </Text>
              <Text>
                {details.duration}
              </Text>
            </View>

          </View>
          <TouchableOpacity style={styles.button} onPress={() => { createDeliveryRequest({ delivery }); }}>
            {!inProgress ? (
              <Text style={styles.text_button}>
                CREATE DELIVERY
              </Text>
            ) :
              <ActivityIndicator color="#FFFFFF" size={30} />
            }
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  createDeliveryState: getCreateDelivery(state),
});

export default connect(mapStateToProps, { createDeliveryRequest })(ViewDeliveryPricing);
