/* eslint-disable global-require */
import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Header, Body, Right, Text, Left, Icon } from 'native-base';
import colors from '../../constants/colors.json';

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
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

const AppHeader = ({ headerText, icon }) => (
  <Header style={styles.header}>
    <Left>
      <Icon name={icon} style={styles.icon} />
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
