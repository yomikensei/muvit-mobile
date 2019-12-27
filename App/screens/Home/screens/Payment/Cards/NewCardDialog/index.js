import React, { useState } from 'react';
import { View, Dimensions, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { MediumText } from 'components/Text';
import Modal from 'react-native-modal';
import BaseStyles from 'theme/base';
import { RFValue } from 'react-native-responsive-fontsize';
import { Formik, Field } from 'formik';
import CardInput from 'components/CardInput';
import api from 'services/api';
import RNPaystack from 'react-native-paystack';
import Snackbar from 'react-native-snackbar';

const { height, width } = Dimensions.get('window');

const verifyCard = card => {
  if (!card) return false;
  if (!card.values) return false;
  const {
    status: { number, expiry, cvc },
  } = card;
  if ((number === 'valid', expiry === 'valid', cvc === 'valid')) return true;
  return false;
};

export default ({ isShown, close, fetchCards }) => {
  const [isLoading, setIsLoading] = useState(false);
  const submit = async ({ card }) => {
    setIsLoading(true);
    try {
      if (verifyCard(card)) {
        const {
          values: { number: cardNumber, cvc, expiry },
        } = card;
        const expiryMonth = expiry.slice(0, 2);
        const expiryYear = expiry.slice(3, 5);

        const payload = {
          cardNumber,
          cvc,
          expiryMonth,
          expiryYear,
        };
        const {
          data: {
            data: { access_code: accessCode },
          },
        } = await api({
          url: '/card/initialize',
          method: 'GET',
        });
        const { reference } = await RNPaystack.chargeCardWithAccessCode({
          ...payload,
          accessCode,
        });
        await api({
          method: 'POST',
          url: '/card',
          data: {
            transaction_reference: reference,
          },
        });
        fetchCards();
        close();
        Snackbar.show({
          title: 'Card added successfully',
          duration: Snackbar.LENGTH_SHORT,
        });
      } else {
        Alert.alert('Invalid card details', 'Please ensure all fields on the form are filled', [], {
          cancelable: true,
        });
      }
    } catch (e) {
      console.log(e.response ? e.response : e);
      Snackbar.show({
        title: 'Failed to add card, please check your card details',
        duration: Snackbar.LENGTH_SHORT,
      });
    }
    setIsLoading(false);
  };

  return (
    <View>
      <Modal
        avoidKeyboard
        backdropOpacity={0.7}
        isVisible={isShown}
        onBackButtonPress={close}
        onBackdropPress={close}
      >
        <View
          style={{
            alignSelf: 'center',
            backgroundColor: '#FFF',
            borderRadius: 10,
            height: height * 0.5,
            width: width * 0.8,
            alignContent: 'center',
            justifyContent: 'space-around',
            padding: 10,
          }}
        >
          <Formik
            initialValues={{ card: { values: {}, valid: false, status: {} } }}
            onSubmit={submit}
          >
            {({ handleChange, handleSubmit }) => (
              <>
                <Field name="card" component={CardInput} handleChange={handleChange} />
                <TouchableOpacity
                  onPress={handleSubmit}
                  style={{
                    ...BaseStyles.button,
                    height: RFValue(40),
                    borderRadius: 5,
                  }}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <ActivityIndicator size={25} color="#FFF" />
                  ) : (
                    <MediumText customstyle={{ color: '#FFF' }}>Add Card</MediumText>
                  )}
                </TouchableOpacity>
              </>
            )}
          </Formik>
        </View>
      </Modal>
    </View>
  );
};
