import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Container } from 'native-base';
import moment from 'moment';
import { getRide } from 'services/rides/reducer';
import AppHeader from 'components/AppHeader';
import colors from 'constants/colors.json';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  view: {
    margin: 25,
  },
  section: {
    marginBottom: 25,
  },
  header_section: {
    fontFamily: 'Raleway-Bold',
  },
  body_section: {
    fontSize: 16,
  },
});

class ViewRide extends Component {
  render() {
    const { navigation: { navigate }, ride: { location_origin, location_destination, createdAt, bill, code, return_trip } } = this.props;
    return (
      <Container style={styles.container}>
        <AppHeader showBackButton goBack={() => navigate('HomeTab')} headerText="Ride Details" icon="md-list-box" />
        <ScrollView>
          <View style={styles.view}>
            <View style={styles.section}>
              <Text style={styles.header_section}>
                Ride Code
              </Text>
              <Text style={styles.body_section}>
                {`#${code}`}
              </Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.header_section}>
                Start Location
              </Text>
              <Text style={styles.body_section}>
                {`${location_origin.name}, ${location_origin.address}`}
              </Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.header_section}>
                Destination
              </Text>
              <Text style={styles.body_section}>
                {`${location_destination.name}, ${location_destination.address}`}
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.header_section}>
                Return Trip
              </Text>
              <Text style={styles.body_section}>
                {return_trip ? 'Yes' : 'No'}
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.header_section}>
                Bill
              </Text>
              <Text style={styles.body_section}>
                {`₦ ${bill}`}
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.header_section}>
                Date
              </Text>
              <Text style={styles.body_section}>
                {moment(new Date(createdAt)).format('dddd, Do MMMM YYYY, h:mm:ss A')}
              </Text>
            </View>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = (state, { navigation: { state: { params: { id } } } }) => ({
  ride: getRide(state, id),
});

export default connect(mapStateToProps)(ViewRide);
