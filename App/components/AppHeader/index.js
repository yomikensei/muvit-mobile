/* eslint-disable global-require */
import React from 'react';
import { StyleSheet } from 'react-native';
import { Header, Body, Text, Icon } from 'native-base';
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
  body: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: '#ffffff',
    marginHorizontal: 10,
  },
});

const AppHeader = ({ headerText, icon }) => (
  <Header style={styles.header}>
    <Body style={styles.body}>
      <Icon name={icon} style={styles.icon} />
      <Text style={styles.headerText}>{headerText}</Text>
    </Body>
  </Header>
);

export default AppHeader;
