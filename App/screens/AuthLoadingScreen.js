/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { ActivityIndicator } from 'react-native';
// import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { getIsLoggedIn } from '../services/auth/reducer';

class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    const { navigation, isLoggedIn } = this.props;
    if (isLoggedIn) {
      navigation.navigate('Home');
    } else {
      navigation.navigate('Auth');
    }
  }

  render() {
    return (
      <ActivityIndicator
        style={{ flex: 1, justifyContent: 'center' }}
        color="#0000ff"
        size={50}
      />
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: getIsLoggedIn(state),
});

export default connect(
  mapStateToProps,
  {},
)(AuthLoadingScreen);
