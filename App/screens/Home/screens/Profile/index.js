import React from 'react';
import { connect } from 'react-redux';
import { Dimensions, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Container, Content, Icon, List, ListItem, Text, View } from 'native-base';
import AppHeader from 'components/AppHeader';
import Avatar from 'components/Avatar';
import colors from 'constants/colors.json';
import { getUser } from 'services/auth/reducer';
import { logout } from 'services/auth/actions';
import BaseStyles from 'theme/base';
import DashNav from 'components/DashNav';
import { RFValue } from 'react-native-responsive-fontsize';
import { RegularText, BoldText } from 'components/Text';
import Colors from 'theme/colors';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const Profile = props => {
  const {
    user: { firstname, lastname, email, phone },
    logout: Logout,
    navigation,
  } = props;
  return (
    <View style={BaseStyles.background}>
      <DashNav navigation={navigation} title="Profile" />
      <Image
        source={{ uri: 'https://i.pravatar.cc/300' }}
        style={{
          width: RFValue(128),
          height: RFValue(128),
          borderRadius: RFValue(64),
          borderWidth: RFValue(7),
          borderColor: '#EFF3F6',
          alignSelf: 'center',
          marginBottom: RFValue(19),
        }}
      />
      <RegularText
        customstyle={{
          fontSize: RFValue(22),
          color: '#FFF',
          textAlign: 'center',
          marginBottom: RFValue(5),
        }}
      >
        {`${firstname} ${lastname}`}
      </RegularText>
      <BoldText
        customstyle={{
          fontSize: RFValue(25),
          color: '#FFF',
          textAlign: 'center',
          marginBottom: RFValue(5),
        }}
      >
        {phone}
      </BoldText>
      <RegularText
        customstyle={{
          fontSize: RFValue(14),
          color: 'rgba(255,255,255,0.8)',
          textAlign: 'center',
          marginBottom: RFValue(20),
        }}
      >
        johnsmith@muvit.com
      </RegularText>
      <View style={{ paddingHorizontal: RFValue(24) }}>
        <Action backgroundColor="#1969C5" title="Edit Profile" />
        <Action backgroundColor="#1969C5" title="Help / Support" />
        <Action backgroundColor="#BD0000" title="Logout" action={Logout} />
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  user: getUser(state),
});

const Action = ({ title, action, backgroundColor }) => (
  <TouchableOpacity
    style={{
      backgroundColor,
      width: '100%',
      height: RFValue(50),
      borderRadius: RFValue(7),
      paddingEnd: RFValue(13.49),
      justifyContent: 'center',
      alignItems: 'center',
      paddingStart: RFValue(22),
      marginBottom: RFValue(14),
    }}
    onPress={action}
  >
    <RegularText customstyle={{ color: '#FFF', fontSize: RFValue(16) }}>{title}</RegularText>
  </TouchableOpacity>
);

export default connect(mapStateToProps, { logout })(Profile);
