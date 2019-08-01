/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Alert } from 'react-native';
import { Container } from 'native-base';
import AppHeader from '../../../../../../components/AppHeader';
import CreateCardForm from './components/CreateCardForm';
import { createCardRequest } from '../../../../../../services/cards/actions';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
});

class CreateCard extends React.Component {
  constructor(props) {
    super(props);
    this.verifyCard = this.verifyCard.bind(this);
  }

  verifyCard(values) {
    if (values) {
      if (values.card) {
        if (values.card.valid) {
          const { card: { values: _card } } = values;
          const { createCardRequest } = this.props;
          // const { number, cvc, expiry } = _card;
          const { expiry } = _card;
          // const cardNumber = number.replace(/ /g, '');
          const cardNumber = '4084084084084081';
          const cvc = '408';
          const expiryMonth = expiry.slice(0, 2);
          const expiryYear = expiry.slice(3, 5);
          const card = { cardNumber, cvc, expiryMonth, expiryYear };
          createCardRequest({ card });
        } else {
          Alert.alert(
            '',
            'Please ensure all fields on the form are filled',
            [],
            { cancelable: true },
          );
        }
      } else {
        Alert.alert(
          '',
          'Please ensure all fields on the form are filled',
          [],
          { cancelable: true },
        );
      }
    } else {
      Alert.alert(
        '',
        'Please ensure all fields on the form are filled',
        [],
        { cancelable: true },
      );
    }
  }

  render() {
    const { navigation: { navigate } } = this.props;
    return (
      <Container>
        <AppHeader showBackButton goBack={() => navigate('HomeTab')} headerText="Add a card" icon="md-list-box" />
        <View style={styles.container}>
          <CreateCardForm onSubmit={this.verifyCard} />
        </View>
      </Container>
    );
  }
}

export default connect(null, { createCardRequest })(CreateCard);
