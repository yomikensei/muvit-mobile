import React from 'react';
import { ScrollView } from 'react-native';
import { Text, Container, List, ListItem } from 'native-base';
import FAB from 'react-native-fab';
import AppHeader from '../../../../../components/AppHeader';

class DeliveryTasks extends React.Component {
  render() {
    return (
      <Container>
        <AppHeader headerText="Delivery Tasks" />
        <ScrollView>
          <List>
            <ListItem>
              <Text>Simon Mignolet</Text>
            </ListItem>
            <ListItem>
              <Text>Nathaniel Clyne</Text>
            </ListItem>
            <ListItem>
              <Text>Dejan Lovren</Text>
            </ListItem>
          </List>
        </ScrollView>
        <FAB buttonColor="#006DEF" iconTextColor="#FFFFFF" onClickAction={() => {}} visible />
      </Container>
    );
  }
}

export default DeliveryTasks;
