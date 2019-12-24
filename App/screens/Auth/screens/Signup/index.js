/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import { View, Alert, ScrollView } from 'react-native';
import { signupRequest } from 'services/auth/actions';
import BaseStyles from 'theme/base';
import TopNav from 'components/TopNav';
import { Formik } from 'formik';
import SignupForm from './components/SignupForm';

const initialValues = {
  firstname: '',
  lastname: '',
  phone: '',
  email: '',
  phone_prefix: '234',
  prepass: '',
  confirmation: '',
};

const Signup = props => {
  const { navigation } = props;

  const signup = async values => {
    try {
    } catch (e) {
      console.log(e);
    }

    console.log(values);
    // const { prepass, confirmation, firstname, lastname, phone, email } = values;
    // const { signupRequest } = props;
    // if (prepass && confirmation && firstname && lastname && phone && email) {
    //   if (prepass !== confirmation) {
    //     Alert.alert('', 'Passwords do not match', [], { cancelable: true });
    //   } else signupRequest({ credentials: values });
    // } else {
    //   Alert.alert('', 'Please ensure all fields on the form are filled', [], { cancelable: true });
    // }
  };

  return (
    <View style={BaseStyles.background}>
      <TopNav navigation={navigation} title="Signup" info="please fill in all details" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Formik
          initialValues={initialValues}
          onSubmit={signup}
          render={props => <SignupForm {...props} />}
        />
      </ScrollView>
    </View>
  );
};

export default connect(null, { signupRequest })(Signup);
