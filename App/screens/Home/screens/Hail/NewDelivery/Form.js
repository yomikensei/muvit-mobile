import React from "react";
import { View } from "react-native";
import { Field } from "formik";
import PlaceInput from "components/PlaceInput";

export default props => {
  const { handleChange } = props;

  return (
    <View>
      <Field name="origin" component={PlaceInput} label="Origin" handleChange={handleChange} />
      <Field
        name="destination"
        component={PlaceInput}
        label="Destination"
        handleChange={handleChange}
      />
    </View>
  );
};
