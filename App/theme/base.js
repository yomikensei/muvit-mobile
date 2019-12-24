import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Colors from './colors';

export default StyleSheet.create({
  button: {
    width: '100%',
    height: RFValue(51),
    borderRadius: RFValue(10),
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: RFValue(36),
    paddingHorizontal: RFValue(29),
  },
  input: {
    width: '100%',
    height: RFValue(67),
  },
});
