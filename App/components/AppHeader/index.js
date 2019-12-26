/* eslint-disable global-require */
import React, { PureComponent } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Body, Header, Icon, Right, Text } from 'native-base';
import colors from 'constants/colors.json';
// eslint-disable-next-line import/no-unresolved
import { clearState } from 'app/localStorage';

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
  button_logout: {
    elevation: 5,
    backgroundColor: 'white',
    height: 35,
    width: 80,
    borderRadius: 5,
    justifyContent: 'center',
  },
  text_logout: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: colors.primary,
    fontFamily: 'Raleway-Bold',
    fontSize: 14,
  },
});

class AppHeader extends PureComponent {
  render() {
    const { headerText, icon, showBackButton, goBack, showLogout, logout, navigate } = this.props;
    return (
      <Header style={styles.header}>
        <Body style={styles.body}>
          {showBackButton ?
            (<TouchableOpacity onPress={goBack}><Icon name="arrow-left" style={styles.backIcon} type="FontAwesome5" /></TouchableOpacity>) :
            (<Icon name={icon} style={styles.icon} />
            )}
          <Text style={styles.headerText}>{headerText}</Text>
        </Body>
        {showLogout && (
          <Right>
            <TouchableOpacity
              onPress={() => {
                clearState();
                navigate('Auth');
                logout();
              }}
              style={styles.button_logout}
            >
              <Text style={styles.text_logout}>
                LOGOUT
              </Text>
            </TouchableOpacity>
          </Right>
        )
        }
      </Header>
    );
  }
}

export default AppHeader;
