/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { getFetchPricing } from 'services/rides/reducer';
import PlaceInput from 'components/PlaceInput';

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

class NewRideForm extends Component {
  render() {
    const { handleSubmit, fetchPricingState: { inProgress } } = this.props;
    return (
      <View style={styles.container}>

        <View style={styles.section}>
          <Field
            style={styles.placeInput}
            name="location_origin"
            component={PlaceInput}
            label="Current Location"
            returnKeyType="next"
            autoFocus
          />
        </View>

        <View style={styles.section}>
          <Field
            style={styles.placeInput}
            name="location_destination"
            component={PlaceInput}
            label="Destination"
            returnKeyType="next"
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          {!inProgress ? (
            <Text style={styles.text_button}>
              FETCH RIDE PRICING
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
  form: 'newRideForm',
})(NewRideForm));
