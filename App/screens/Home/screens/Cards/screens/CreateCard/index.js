import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Container } from 'native-base';
import AppHeader from '../../../../../../components/AppHeader';
import CreateCardForm from './components/CreateCardForm';

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
    console.log(values);
    console.log(this.props);
  }

  render() {
    const { navigation: { navigate } } = this.props;
    return (
      <Container>
        <AppHeader showBackButton goBack={() => navigate('HomeTab')} headerText="Add a card" icon="md-list-box" />
        <View onSubmit={this.verifyCard} style={styles.container}>
          <CreateCardForm onSubmit={this.verifyCard} />
        </View>
      </Container>
    );
  }
}

export default CreateCard;
