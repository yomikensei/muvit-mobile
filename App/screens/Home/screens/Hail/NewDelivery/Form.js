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
      <Field
        name="location_origin"
        component={PlaceInput}
        label="Pickup point"
        handleChange={handleChange}
      />
      <Field
        name="location_destination"
        component={PlaceInput}
        label="Delivery point"
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
          <MediumText customstyle={{ color: '#FFF' }}>Fetch Pricing</MediumText>
        )}
      </TouchableOpacity>
    </View>
  );
};
