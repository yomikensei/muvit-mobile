import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container } from 'native-base';
import AppHeader from '../../../../../../components/AppHeader';
import NewDeliveryForm from './components/NewDeliveryForm';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 25,
  },
});

class NewDelivery extends Component {
  render() {
    const { navigation: { navigate } } = this.props;

    return (
      <Container>
        <AppHeader showBackButton goBack={() => navigate('HomeTab')} headerText="Create a Delivery" icon="md-list-box" />
        <View style={styles.container}>
          <NewDeliveryForm />
        </View>
      </Container>
    );
  }
}

export default NewDelivery;
