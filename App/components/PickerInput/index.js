import React from 'react';
import { Picker, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  pickerView: {
    height: 40,
    backgroundColor: '#EEF2F5',
    borderRadius: 7,
    paddingHorizontal: 10,
    marginVertical: 5,
    overflow: 'hidden',
  },
  pickerField: {
    margin: 0,
    padding: 0,
    flex: 1,
  },
  pickerItem: {
    fontFamily: 'Raleway-Medium',
  },
  label: {
    marginBottom: 5,
    fontSize: 14,
    fontFamily: 'Raleway-SemiBold',
    justifyContent: 'center',
  },
});

const PickerInput = (props) => {
  const { input: { onChange, value: selected }, items, prompt } = props;
  return ([
    <Text key={0} style={styles.label}>{prompt}</Text>,
    <View key={1} style={styles.pickerView}>
      <Picker
        mode="dropdown"
        style={styles.pickerField}
        selectedValue={selected}
        onValueChange={_value => onChange(_value)}
        itemStyle={styles.pickerItem}
      >
        {items.map(({ label, value }, index) => (
          <Picker.Item key={index} label={label} value={value} />
        ))
        }
      </Picker>
    </View>]
  );
};

export default PickerInput;
