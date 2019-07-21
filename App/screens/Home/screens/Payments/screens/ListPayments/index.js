import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Container } from 'native-base';
import AppHeader from '../../../../../../components/AppHeader';
import ItemCard from './components/PaymentItem';
import colors from '../../../../../../constants/colors.json';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
});

class ListDeliveries extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <AppHeader headerText="Payment History" icon="md-list-box" />
        <FlatList
          data={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <ItemCard item={item} />
          )}
        />
      </Container>
    );
  }
}

export default ListDeliveries;
