/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { Container } from 'native-base';
import { createRideRequest } from 'services/rides/actions';
import AppHeader from 'components/AppHeader';
import { getCreateRide } from 'services/rides/reducer';

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

class ViewRidePricing extends PureComponent {
  render() {
    const { navigation: { navigate, state: { params: { ride, details } } }, createRideRequest, createRideState: { inProgress } } = this.props;
    return (
      <Container>
        <AppHeader showBackButton goBack={() => navigate('OrderRide')} headerText="Confirm Ride" icon="md-list-box" />
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.content}>
              <View style={styles.section}>
                <Text style={styles.header_section}>
                  Current Location
                </Text>
                <Text>
                  {`${ride.location_origin.name} ${ride.location_origin.address}`}
                </Text>
              </View>

              <View style={styles.section}>
                <Text style={styles.header_section}>
                  Destination
                </Text>
                <Text>
                  {`${ride.location_destination.name} ${ride.location_destination.address}`}
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
            <TouchableOpacity style={styles.button} onPress={() => { createRideRequest({ ride }); }}>
              {!inProgress ? (
                <Text style={styles.text_button}>
                  ORDER RIDE
                </Text>
              ) :
                <ActivityIndicator color="#FFFFFF" size={30} />
              }
            </TouchableOpacity>
          </View>
        </ScrollView>

      </Container>
    );
  }
}

const mapStateToProps = state => ({
  createRideState: getCreateRide(state),
});

export default connect(mapStateToProps, { createRideRequest })(ViewRidePricing);
