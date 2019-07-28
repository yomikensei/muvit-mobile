/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createDeliveryRequest } from 'services/deliveries/actions';
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
    this.createDelivery = this.createDelivery.bind(this);
  }

  createDelivery(values) {
    const { createDeliveryRequest } = this.props;
    createDeliveryRequest({ delivery: values });
  }

  render() {
    const { navigation: { navigate } } = this.props;

    return (
      <Container>
        <AppHeader showBackButton goBack={() => navigate('HomeTab')} headerText="Create a Delivery" icon="md-list-box" />
        <View style={styles.container}>
          <NewDeliveryForm onSubmit={this.createDelivery} />
        </View>
      </Container>
    );
  }
}

export default connect(null, { createDeliveryRequest })(NewDelivery);
