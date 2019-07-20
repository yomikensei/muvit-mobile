import React from 'react';
import { ScrollView } from 'react-native';
import { Container, Content } from 'native-base';
import FAB from 'react-native-fab';
import AppHeader from '../../../../components/AppHeader';
import ItemCard from './components/ItemCard';

class DeliveryTasks extends React.Component {
  render() {
    const {
      navigation: { navigate },
    } = this.props;
    return (
      <Container>
        <AppHeader headerText="Delivery History" icon="md-list-box" />
        <ScrollView>
          <Content padder>
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </Content>
        </ScrollView>
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
