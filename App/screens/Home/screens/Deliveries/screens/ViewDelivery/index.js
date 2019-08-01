import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { Container } from 'native-base';
import moment from 'moment';
import { getDelivery } from 'services/deliveries/reducer';
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

class ViewDelivery extends Component {
  render() {
    const { navigation: { navigate }, delivery: { location_pickup, location_delivery, createdAt, bill, code, name_pickup, name_delivery, phone_pickup, phone_delivery } } = this.props;
    return (
      <Container style={styles.container}>
        <AppHeader showBackButton goBack={() => navigate('HomeTab')} headerText="Delivery Details" icon="md-list-box" />
        <View style={styles.view}>
          <View style={styles.section}>
            <Text style={styles.header_section}>
              Delivery Code
            </Text>
            <Text style={styles.body_section}>
              {`#${code}`}
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.header_section}>
              Pickup Location
            </Text>
            <Text style={styles.body_section}>
              {`${location_pickup.name}, ${location_pickup.address}`}
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.header_section}>
              Pickup Contact Name
            </Text>
            <Text style={styles.body_section}>
              {name_pickup}
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.header_section}>
              Pickup Contact Phone
            </Text>
            <Text style={styles.body_section}>
              {phone_pickup}
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.header_section}>
              Delivery Location
            </Text>
            <Text style={styles.body_section}>
              {`${location_delivery.name}, ${location_delivery.address}`}
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.header_section}>
              Delivery Contact Name
            </Text>
            <Text style={styles.body_section}>
              {name_delivery}
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.header_section}>
              Delivery Contact Phone
            </Text>
            <Text style={styles.body_section}>
              {phone_delivery}
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.header_section}>
              Return Trip
            </Text>
            <Text style={styles.body_section}>
              No
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
      </Container>
    );
  }
}

const mapStateToProps = (state, { navigation: { state: { params: { id } } } }) => ({
  delivery: getDelivery(state, id),
});

export default connect(mapStateToProps)(ViewDelivery);
