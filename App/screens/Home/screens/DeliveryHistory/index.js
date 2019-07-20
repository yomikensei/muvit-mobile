import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Container } from 'native-base';
import FAB from 'react-native-fab';
import AppHeader from '../../../../components/AppHeader';
import ItemCard from './components/ItemCard';
import colors from '../../../../constants/colors.json';


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
});

class DeliveryTasks extends React.Component {
  render() {
    const {
      navigation: { navigate },
    } = this.props;
    return (
      <Container style={styles.container}>
        <AppHeader headerText="Delivery History" icon="md-list-box" />
        <FlatList
          data={[{ key: 'a' }, { key: 'b' }, { key: 'b' }, { key: 'b' }, { key: 'b' }, { key: 'b' }, { key: 'b' }, { key: 'b' }, { key: 'b' }, { key: 'b' }]}
          renderItem={({ item }) => (
            <ItemCard item={item} />
          )}
        />
        <FAB
          buttonColor="#006DEF"
          iconTextColor="#FFFFFF"
          onClickAction={() => navigate('CreateDeliveryTask')}
          visible
        />
      </Container>
    );
  }
}

export default DeliveryTasks;
