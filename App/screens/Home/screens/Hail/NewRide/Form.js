import React from 'react';
import { ActivityIndicator, TouchableOpacity, View } from 'react-native';
import { Field } from 'formik';
import PlaceInput from 'components/PlaceInput';
import BaseStyles from 'theme/base';
import { MediumText } from 'components/Text';

export default props => {
  const { handleChange, isLoading, handleSubmit } = props;
  return (
    <View>
      <Field name="origin" component={PlaceInput} label="Origin" handleChange={handleChange} />
      <Field
        name="destination"
        component={PlaceInput}
        label="Destination"
        handleChange={handleChange}
      />

      <TouchableOpacity
        onPress={handleSubmit}
        style={{ ...BaseStyles.button }}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator size={25} color="#FFF" />
        ) : (
          <MediumText customstyle={{ color: '#FFF' }}>Continue</MediumText>
        )}
      </TouchableOpacity>
    </View>
  );
};
