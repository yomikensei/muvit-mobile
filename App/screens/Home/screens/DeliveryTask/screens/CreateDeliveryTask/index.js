import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Container, Card, CardItem, Text, Icon, Button, View } from 'native-base';
import PickupForm from './components/PickupForm';
import DeliveryForm from './components/DeliveryForm';
import colors from '../../../../../../constants/colors.json';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    borderColor: '#ffffff',
  },
  icon: {
    color: colors.primary,
  },
  button: {
    backgroundColor: colors.primary,
  },
});

class CreateDeliveryTask extends Component {
  render() {
    return (
      <Container>
        <ScrollView style={styles.container}>
          <View>
            <Card style={styles.card}>
              <CardItem header>
                <Icon name="md-cart" style={styles.icon} />
                <Text>Pick-up details</Text>
              </CardItem>
            </Card>
            <PickupForm />
            <Card style={styles.card}>
              <CardItem header>
                <Icon name="md-bus" style={styles.icon} />
                <Text>Delivery details</Text>
              </CardItem>
            </Card>
            <DeliveryForm />
          </View>
        </ScrollView>
        <Button full large style={styles.button}>
          <Text>Proceed to pay</Text>
        </Button>
      </Container>
    );
  }
}

export default CreateDeliveryTask;
