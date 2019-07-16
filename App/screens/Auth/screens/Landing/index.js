/* eslint-disable global-require */
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button, Icon } from 'native-base';
import colors from '../../../../constants/colors.json';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: '100%',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'ProximaNovaAltBold',
  },
  image: {
    width: 300,
    height: 300,
  },
  button: {
    backgroundColor: colors.primary,
    color: '#ffffff',
    padding: 20,
    marginVertical: 10,
    elevation: 0,
  },
});

class Landing extends Component {
  render() {
    const {
      navigation: { navigate },
    } = this.props;
    return (
      <View style={styles.container}>
        <Image
          source={require('../../../../assets/images/muvit-illustration.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.text}>Quick deliveries anytime, anywhere</Text>
        <View>
          <Button iconRight rounded style={styles.button} onPress={() => navigate('Login')}>
            <Text style={{
              color: '#ffffff',
            }}>Get started</Text>
            <Icon name="md-arrow-round-forward" />
          </Button>
        </View>
      </View>
    );
  }
}

export default Landing;
