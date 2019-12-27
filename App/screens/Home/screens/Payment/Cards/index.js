import React from 'react';
import { View } from 'react-native';
import { RegularText } from 'components/Text';

export default ({ isLoading, data }) => {
  console.log(data);

  return (
    <View>
      <RegularText>Cards List</RegularText>
    </View>
  );
};
