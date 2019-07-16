import React from 'react';
import { ScrollView, StyleSheet, Dimensions } from 'react-native';
import { View, Text, Container, Content, List, ListItem, Icon } from 'native-base';
import CreditCard from 'react-native-credit-card';
import AppHeader from '../../../../components/AppHeader';
import Avatar from '../../../../components/Avatar';
import colors from '../../../../constants/colors.json';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  content: {
    marginVertical: screenHeight / 20,
  },
  centerContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  profileAvatarText: {
    color: '#ffffff',
    fontSize: 40,
  },
  icon: {
    color: colors.primary,
    marginHorizontal: 10,
  },
  creditCard: {
    marginHorizontal: screenWidth / 7,
    marginVertical: 10,
  },
});

class Profile extends React.Component {
  render() {
    return (
      <Container>
        <AppHeader headerText="Profile" icon="md-contact" />
        <ScrollView>
          <Content contentContainerStyle={styles.content}>
            <View style={styles.centerContent}>
              <Avatar backgroundColor={colors.primary} borderWidth={0} width={120} height={120}>
                <View>
                  <Text style={styles.profileAvatarText}>JD</Text>
                </View>
              </Avatar>
            </View>
            <List>
              <ListItem>
                <Icon name="md-contact" style={styles.icon} />
                <Text>John Doe</Text>
              </ListItem>
              <ListItem>
                <Icon name="md-mail" style={styles.icon} />
                <Text>john.doe@gmail.com</Text>
              </ListItem>
              <ListItem>
                <Icon name="md-call" style={styles.icon} />
                <Text>09094838478</Text>
              </ListItem>
            </List>
            <CreditCard
              type="mastercard"
              number="************6666"
              name="John Doe"
              expiry="0521"
              cvc="123"
              bar
              style={styles.creditCard}
            />
          </Content>
        </ScrollView>
      </Container>
    );
  }
}

export default Profile;
