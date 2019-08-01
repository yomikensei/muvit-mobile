import React from 'react';
import { connect } from 'react-redux';
import { ScrollView, StyleSheet, Dimensions } from 'react-native';
import { View, Text, Container, Content, List, ListItem, Icon } from 'native-base';
import AppHeader from 'components/AppHeader';
import Avatar from 'components/Avatar';
import colors from 'constants/colors.json';
import { getUser } from 'services/auth/reducer';
import { logout } from 'services/auth/actions';

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
    textTransform: 'uppercase',
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
    // eslint-disable-next-line no-shadow
    const { user: { firstname, lastname, email, phone }, logout, navigation: { navigate } } = this.props;
    return (
      <Container>
        <AppHeader navigate={navigate} logout={logout} showLogout headerText="Settings" icon="md-contact" />
        <ScrollView>
          <Content contentContainerStyle={styles.content}>
            <View style={styles.centerContent}>
              <Avatar backgroundColor={colors.primary} borderWidth={0} width={120} height={120}>
                <View>
                  <Text style={styles.profileAvatarText}>{`${firstname[0]}${lastname[0]}`}</Text>
                </View>
              </Avatar>
            </View>
            <List>
              <ListItem>
                <Icon name="md-contact" style={styles.icon} />
                <Text>{`${firstname} ${lastname}`}</Text>
              </ListItem>
              <ListItem>
                <Icon name="md-mail" style={styles.icon} />
                <Text>{email}</Text>
              </ListItem>
              <ListItem>
                <Icon name="md-call" style={styles.icon} />
                <Text>{phone}</Text>
              </ListItem>
            </List>
          </Content>
        </ScrollView>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  user: getUser(state),
});

export default connect(mapStateToProps, { logout })(Profile);
