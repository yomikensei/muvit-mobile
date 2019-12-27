import React, { useState } from 'react';
import { View, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native';
import { MediumText } from 'components/Text';
import Modal from 'react-native-modal';
import BaseStyles from 'theme/base';
import { RFValue } from 'react-native-responsive-fontsize';
import { Formik, Field } from 'formik';
import CardInput from 'components/CardInput';

const { height, width } = Dimensions.get('window');

export default ({ isShown = true, close }) => {
  const [isLoading, setIsLoading] = useState(false);
  const submit = async values => {
    setIsLoading(true);
    try {
      console.log(values);
    } catch (e) {
      console.log(e.response ? e.response : e);
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
                    height: RFValue(35),
                    borderRadius: 9,
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
