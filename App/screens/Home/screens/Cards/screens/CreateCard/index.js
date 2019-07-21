import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container } from 'native-base';
import AppHeader from '../../../../../../components/AppHeader';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
});

class CreateCard extends React.Component {
  render() {
    const { navigation: { navigate } } = this.props;
    return (
      <Container>
        <AppHeader showBackButton goBack={() => navigate('HomeTab')} headerText="Add a card" icon="md-list-box" />
        <View style={styles.container}>
          <Text>
            Add a card
          </Text>
        </View>
      </Container>
    );
  }
}

export default CreateCard;
