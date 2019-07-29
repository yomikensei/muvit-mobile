import React from 'react';
import { connect } from 'react-redux';
import { FlatList, StyleSheet } from 'react-native';
import { Container } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FAB from 'react-native-fab';
import AppHeader from 'components/AppHeader';
import colors from 'constants/colors.json';
import { getDeliveries } from 'services/deliveries/reducer';
import DeliveryItem from './components/DeliveryItem';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
});

class ListDeliveries extends React.Component {
  render() {
    const {
      navigation: { navigate },
      deliveries,
    } = this.props;
    return (
      <Container style={styles.container}>
        <AppHeader headerText="Delivery History" icon="md-list-box" />
        <FlatList
          data={deliveries}
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

const mapStateToProps = state => ({
  deliveries: getDeliveries(state),
});

export default connect(mapStateToProps)(ListDeliveries);
