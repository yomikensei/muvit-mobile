/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import CardInput from '../../../../../../../../components/CardInput';
import colors from '../../../../../../../../constants/colors.json';

const styles = StyleSheet.create({
  cardInput: {
    marginVertical: 80,
  },
  button: {
    backgroundColor: 'grey',
    color: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 7,
    elevation: 20,
    width: 180,
    height: 50,
  },
  text_button: {
    color: '#ffffff',
    paddingHorizontal: 10,
    textAlignVertical: 'center',
    fontSize: 18,
    fontFamily: 'Raleway-Bold',
  },
});

class CreateCardForm extends Component {
  render() {
    const inProgress = false;
    const { handleSubmit } = this.props;
    return (
      <View>
        <View style={styles.cardInput}>
          <Field
            name="card"
            component={CardInput}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          {!inProgress ? (
            <Text style={styles.text_button}>
              Verify Card
            </Text>
          ) :
            <ActivityIndicator color="#FFFFFF" size={30} />
          }
        </TouchableOpacity>
      </View>
    );
  }
}

export default reduxForm({
  form: 'createCardForm',
})(CreateCardForm);
