import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Container } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FAB from 'react-native-fab';
import AppHeader from '../../../../../../components/AppHeader';
import DeliveryItem from './components/DeliveryItem';
import colors from '../../../../../../constants/colors.json';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
});

class ListDeliveries extends React.Component {
  render() {
    const {
      navigation: { navigate },
    } = this.props;
    return (
      <Container style={styles.container}>
        <AppHeader headerText="Delivery History" icon="md-list-box" />
        <FlatList
          data={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <DeliveryItem item={item} />
          )}
        />
        <FAB
          buttonColor={colors.primary}
          iconTextColor="#FFFFFF"
          onClickAction={() => navigate('NewDelivery')}
          iconTextComponent={<Icon name="add" />}
          visible
        />
      </Container>
    );
  }
}

export default ListDeliveries;
