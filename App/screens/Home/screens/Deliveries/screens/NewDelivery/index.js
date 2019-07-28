/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDeliveryPricingRequest } from 'services/deliveries/actions';
import { View, StyleSheet } from 'react-native';
import { Container } from 'native-base';
import AppHeader from 'components/AppHeader';
import NewDeliveryForm from './components/NewDeliveryForm';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 25,
  },
});

class NewDelivery extends Component {
  constructor(props) {
    super(props);
    this.fetchPricing = this.fetchPricing.bind(this);
  }

  fetchPricing(values) {
    const { fetchDeliveryPricingRequest } = this.props;
    fetchDeliveryPricingRequest({ delivery: values });
  }

  render() {
    const { navigation: { navigate } } = this.props;

    return (
      <Container>
        <AppHeader showBackButton goBack={() => navigate('HomeTab')} headerText="Create a Delivery" icon="md-list-box" />
        <View style={styles.container}>
          <NewDeliveryForm onSubmit={this.fetchPricing} />
        </View>
      </Container>
    );
  }
}

export default connect(null, { fetchDeliveryPricingRequest })(NewDelivery);
