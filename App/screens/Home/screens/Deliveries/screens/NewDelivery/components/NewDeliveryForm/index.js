/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { getCreateDelivery } from '../../../../../../../../services/deliveries/reducer';
import TextInput from '../../../../../../../../components/TextInput';
import PlaceInput from '../../../../../../../../components/PlaceInput';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 25,
  },
  section: {
    marginBottom: 30,
  },
  button: {
    backgroundColor: 'grey',
    color: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 7,
    elevation: 10,
    width: '100%',
    height: 40,
  },
  text_button: {
    color: '#ffffff',
    paddingHorizontal: 10,
    textAlignVertical: 'center',
    fontSize: 16,
    fontFamily: 'Raleway-Bold',
  },
});

class NewDeliveryForm extends Component {
  render() {
    const { handleSubmit, createDeliveryState: { inProgress } } = this.props;
    return (
      <View style={styles.container}>

        <View style={styles.section}>
          <Field
            style={styles.placeInput}
            name="pickup_location"
            component={PlaceInput}
            label="Pickup Location"
            returnKeyType="next"
            autoFocus
          />
          <Field
            name="name_pickup"
            component={TextInput}
            label="Delivery Contact Name"
            returnKeyType="next"
          />
          <Field
            name="phone_pickup"
            component={TextInput}
            label="Delivery Contact Phone Number"
            keyboardType="phone-pad"
            returnKeyType="next"
          />
        </View>


        <View style={styles.section}>
          <Field
            style={styles.placeInput}
            name="location_delivery"
            component={PlaceInput}
            label="Pickup Location"
            returnKeyType="next"
          />
          <Field
            name="name_delivery"
            component={TextInput}
            label="Delivery Contact Name"
            returnKeyType="next"
          />
          <Field
            name="phone_delivery"
            component={TextInput}
            label="Delivery Contact Phone Number"
            keyboardType="phone-pad"
            returnKeyType="done"
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          {!inProgress ? (
            <Text style={styles.text_button}>
              Create Delivery
            </Text>
          ) :
            <ActivityIndicator color="#FFFFFF" size={30} />
          }
        </TouchableOpacity>
      </View>
    );
  }
}


const mapStateToProps = state => ({
  createDeliveryState: getCreateDelivery(state),
});

export default connect(mapStateToProps)(reduxForm({
  form: 'newDeliveryForm',
})(NewDeliveryForm));
