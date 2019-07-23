import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { View, StyleSheet, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import TextInput from '../../../../../../components/TextInput';
import colors from '../../../../../../constants/colors.json';
import { getLogin } from '../../../../../../services/auth/reducer';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '80%',
  },
  button: {
    backgroundColor: colors.primary,
    color: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 7,
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

class LoginForm extends Component {
  render() {
    const { handleSubmit, loginState: { inProgress } } = this.props;
    return (
      <View style={styles.container}>
        <Field
          name="email"
          component={TextInput}
          label="Email"
          keyboardType="email-address"
          returnKeyType="next"
          autoFocus
        />
        <Field
          name="password"
          component={TextInput}
          label="Password"
          secureTextEntry
          returnKeyType="done"
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          {!inProgress ? (
            <Text style={styles.text_button}>
              Login
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
  loginState: getLogin(state),
});


export default connect(mapStateToProps)(reduxForm({
  form: 'loginForm',
})(LoginForm));
