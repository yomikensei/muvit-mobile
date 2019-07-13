/* eslint-disable global-require */
import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Header, Left, Body, Right, Button, Icon, Text } from 'native-base';
import colors from '../../constants/colors.json';

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    borderBottomColor: '#989898',
    borderBottomWidth: 0.6,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0,
    elevation: 0,
  },
  headerText: {
    color: '#ffffff',
    fontWeight: '900',
  },
  image: {
    width: 50,
    height: 50,
  },
  icon: {
    color: '#ffffff',
  },
});

const AppHeader = ({ headerText }) => (
  <Header style={styles.header}>
    <Left>
      <Button transparent>
        <Icon name="md-menu" style={styles.icon} />
      </Button>
    </Left>
    <Body>
      <Text style={styles.headerText}>{headerText}</Text>
    </Body>
    <Right>
      <Image
        source={require('../../assets/images/muvit-text.png')}
        resizeMode="contain"
        style={styles.image}
      />
    </Right>
  </Header>
);

export default AppHeader;
