import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import colors from '../../../../constants/colors.json';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});
const Splash = ({ navigation: { navigate } }) => {
  useEffect(() => {
    setTimeout(() => navigate('Landing'), 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        // eslint-disable-next-line global-require
        source={require('../../../../assets/images/muvit-text.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};
export default Splash;
