/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { getCreateDelivery } from '../../../../../../../../services/deliveries/reducer';
import PlaceInput from '../../../../../../../../components/PlaceInput';


const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 25,
  },
});

class NewDeliveryForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Field
          name="pickup_location"
          component={PlaceInput}
          label="Pickup Location"
          keyboardType="pickup_location"
          returnKeyType="next"
          autoFocus
        />
      </View>
    );
  }
}


const mapStateToProps = state => ({
  loginState: getCreateDelivery(state),
});

export default connect(mapStateToProps)(reduxForm({
  form: 'newDeliveryForm',
})(NewDeliveryForm));
