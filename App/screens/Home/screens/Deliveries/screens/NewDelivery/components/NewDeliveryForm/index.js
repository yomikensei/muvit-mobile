/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, ScrollView, Dimensions } from 'react-native';
import { List } from 'native-base';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { getFetchPricing } from 'services/deliveries/reducer';
import TextInput from 'components/TextInput';
import PlaceInput from 'components/PlaceInput';
import PickerInput from 'components/PickerInput';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 25,
  },
  form: {
    minHeight: 0,
    maxHeight: height - 170,
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
    elevation: 3,
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
    const { handleSubmit, fetchPricingState: { inProgress } } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.form}>
          <View>
            <View style={styles.section}>
              <Field
                style={styles.placeInput}
                name="location_pickup"
                component={PlaceInput}
                label="Pickup Location"
                returnKeyType="next"
                autoFocus
              />
              <Field
                name="name_pickup"
                component={TextInput}
                label="Pickup Contact Name"
                returnKeyType="next"
              />
              <Field
                name="phone_pickup"
                component={TextInput}
                label="Pickup Contact Phone Number"
                keyboardType="phone-pad"
                returnKeyType="next"
              />
            </View>


            <View style={styles.section}>
              <Field
                style={styles.placeInput}
                name="location_delivery"
                component={PlaceInput}
                label="Delivery Location"
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
                returnKeyType="next"
              />
            </View>
            <View style={styles.section}>
              <View style={styles.section}>
                <Field
                  name="payment_method"
                  component={PickerInput}
                  items={[
                    { label: 'Card', value: 'card' },
                    { label: 'Cash', value: 'cash' },
                  ]}
                  prompt="Select a payment type"
                />
              </View>

              <View style={styles.section}>
                <Field
                  name="return_trip"
                  component={PickerInput}
                  items={[
                    { label: 'No', value: false },
                    { label: 'Yes', value: true },
                  ]}
                  prompt="Would you want a return trip?"
                />
              </View>

              <View style={styles.section}>
                <Field
                  name="cash_payment_bearer"
                  component={PickerInput}
                  items={[
                    { label: 'Sender', value: 'pickup' },
                    { label: 'Receiver', value: 'delivery' },
                  ]}
                  prompt="If it's a cash payment, who pays for the delivery?"
                />
              </View>

            </View>
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          {!inProgress ? (
            <Text style={styles.text_button}>
              FETCH DELIVERY PRICING
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
  fetchPricingState: getFetchPricing(state),
});

export default connect(mapStateToProps)(reduxForm({
  form: 'newDeliveryForm',
})(NewDeliveryForm));
