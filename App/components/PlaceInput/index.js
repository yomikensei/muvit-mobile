/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import RNGooglePlaces from 'react-native-google-places';

const styles = StyleSheet.create({
  container: {
    height: 65,
    justifyContent: 'center',
  },
  container_location: {
    backgroundColor: '#ebeef2',
    height: 40,
    justifyContent: 'center',
    borderRadius: 5,
  },
  text_label: {
    marginVertical: 5,
    fontFamily: 'Raleway-SemiBold',
  },
  text_location: {
    marginHorizontal: 25,
  },
});

class PlaceInput extends Component {
  // eslint-disable-next-line class-methods-use-this
  constructor(props) {
    super(props);
    this.state = {
      selectedLocation: null,
      pristine: true,
      error: null,
    };

    this.openSearchModal = this.openSearchModal.bind(this);
    this.selectLocation = this.selectLocation.bind(this);
  }


  selectLocation = ({ address, location, placeID, name }) => {
    const { input: { onChange } } = this.props;
    const selectedLocation = { address, location, placeID, name };
    this.setState({
      selectedLocation,
      pristine: false,
    });
    onChange(selectedLocation);
  }

  // eslint-disable-next-line class-methods-use-this
  openSearchModal() {
    const { pristine } = this.state;
    const self = this;

    RNGooglePlaces.openAutocompleteModal({
      country: 'NG',
      initialQuery: !pristine ? self.state.selectedLocation.name : '',
    }, ['name', 'address', 'location', 'placeID'])
      .then((place) => {
        self.selectLocation(place);
      })
      .catch(error => console.log(error.message)); // error is a Javascript Error object
  }

  render() {
    const { label } = this.props;
    const { selectedLocation, pristine } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.text_label}>
          {label}
        </Text>
        <TouchableOpacity
          style={styles.container_location}
          onPress={() => this.openSearchModal()}
        >
          <Text
            numberOfLines={1}
            style={styles.text_location}
          >
            {pristine ? 'Please select a location' : `${selectedLocation.name}, ${selectedLocation.address}`}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default PlaceInput;
