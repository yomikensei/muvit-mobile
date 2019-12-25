import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import TextInput from '../../../../../../components/TextInput';
import colors from '../../../../../../constants/colors.json';
import { getSignup } from '../../../../../../services/auth/reducer';
import { Field, Form } from 'formik';
import BaseStyles from 'theme/base';
import { MediumText } from 'components/Text';
import { RFValue } from 'react-native-responsive-fontsize';

export default props => {
  const { handleSubmit, handleChange, isLoading } = props;
  return (
    <>
      <Field
        name="firstname"
        component={TextInput}
        label="First Name"
        returnKeyType="next"
        autoFocus
        handleChange={handleChange}
      />
      <Field
        name="lastname"
        handleChange={handleChange}
        component={TextInput}
        label="Last Name"
        returnKeyType="next"
      />
      <Field
        name="email"
        component={TextInput}
        label="Email"
        keyboardType="email-address"
        returnKeyType="next"
        handleChange={handleChange}
      />
      <Field
        name="phone"
        component={TextInput}
        label="Phone"
        keyboardType="phone-pad"
        returnKeyType="next"
        handleChange={handleChange}
      />
      <Field
        name="prepass"
        component={TextInput}
        label="Password"
        secureTextEntry
        returnKeyType="next"
        handleChange={handleChange}
      />
      <Field
        name="confirmation"
        component={TextInput}
        label="Confirm Password"
        secureTextEntry
        returnKeyType="done"
        handleChange={handleChange}
      />
      <TouchableOpacity
        onPress={handleSubmit}
        style={{ ...BaseStyles.button, marginBottom: RFValue(50) }}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator size={25} color="#FFF" />
        ) : (
          <MediumText customstyle={{ color: '#FFF' }}>Continue</MediumText>
        )}
      </TouchableOpacity>
    </>
  );
};
