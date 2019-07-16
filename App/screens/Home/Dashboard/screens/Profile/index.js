import React from 'react';
import { ScrollView, StyleSheet, Dimensions } from 'react-native';
import { View, Text, Container, Content } from 'native-base';
import AppHeader from '../../../../../components/AppHeader';
import Avatar from '../../../../../components/Avatar';
import colors from '../../../../../constants/colors.json';

const { height: screenHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  content: {
    marginTop: screenHeight / 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileAvatarText: {
    color: '#ffffff',
    fontSize: 40,
  },
});

class Profile extends React.Component {
  render() {
    console.log(screenHeight);
    return (
      <Container>
        <AppHeader headerText="Profile" icon="md-contact" />
        <Content contentContainerStyle={styles.content}>
          <ScrollView>
            <Avatar backgroundColor={colors.primary} borderWidth={0} width={120} height={120}>
              <View>
                <Text style={styles.profileAvatarText}>JD</Text>
              </View>
            </Avatar>
          </ScrollView>
        </Content>
      </Container>
    );
  }
}

export default Profile;
