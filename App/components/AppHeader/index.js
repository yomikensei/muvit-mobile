/* eslint-disable global-require */
import React, { PureComponent } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
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
  backIcon: {
    color: '#ffffff',
    marginHorizontal: 10,
    fontSize: 22,
  },
});

class AppHeader extends PureComponent {
  render() {
    const { headerText, icon, showBackButton, goBack } = this.props;
    return (
      <Header style={styles.header}>
        <Body style={styles.body}>
          {showBackButton ?
            (<TouchableOpacity onPress={goBack}><Icon name="arrow-left" style={styles.backIcon} type="FontAwesome5" /></TouchableOpacity>) :
            (<Icon name={icon} style={styles.icon} />
            )}
          <Text style={styles.headerText}>{headerText}</Text>
        </Body>
      </Header>
    );
  }
}

export default AppHeader;
