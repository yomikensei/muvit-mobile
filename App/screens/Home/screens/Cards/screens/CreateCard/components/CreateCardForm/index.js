/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CardInput from "../../../../../../../../components/CardInput";
import { getCreateCard } from "../../../../../../../../services/cards/reducer";

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
    elevation: 5,
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
    const { handleSubmit, createCard: { inProgress } } = this.props;
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

const mapStateToProps = state => ({
  createCard: getCreateCard(state),
});

export default connect(mapStateToProps)(reduxForm({
  form: 'createCardForm',
})(CreateCardForm));
