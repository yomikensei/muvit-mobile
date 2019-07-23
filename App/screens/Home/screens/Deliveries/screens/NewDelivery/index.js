import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container } from 'native-base';
import AppHeader from '../../../../../../components/AppHeader';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
});

class NewDelivery extends Component {
  render() {
    const { navigation: { navigate } } = this.props;

    return (
      <Container>
        <AppHeader showBackButton goBack={() => navigate('HomeTab')} headerText="Create a Delivery" icon="md-list-box" />
        <View style={styles.container}>
          <Text>
            Create Delivery
          </Text>
        </View>
      </Container>
    );
  }
}

export default NewDelivery;
