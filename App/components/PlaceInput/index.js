/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import RNGooglePlaces from 'react-native-google-places';
import BaseStyles from 'theme/base';
import { RegularText } from 'components/Text';
import { RFValue } from 'react-native-responsive-fontsize';

class PlaceInput extends Component {
  // eslint-disable-next-line class-methods-use-this
  constructor(props) {
    super(props);
    this.state = {
      selectedLocation: null,
      pristine: true,
      error: null,
      initialized: false,
    };

    this.openSearchModal = this.openSearchModal.bind(this);
    this.selectLocation = this.selectLocation.bind(this);
  }

  componentDidUpdate() {
    const { field } = this.props;
    if (field) {
      const { name, value } = field;
      if (!this.state.initialized && value) {
        this.setState({ selectedLocation: value, initialized: true, pristine: false });
      }
    }
  }

  selectLocation = ({ address, location, placeID, name }) => {
    const {
      field: { name: _name },
      form: { setFieldValue },
    } = this.props;
    const selectedLocation = { address, location, placeID, name };
    this.setState({
      selectedLocation,
      pristine: false,
    });
    setFieldValue(_name, selectedLocation);
  };

  // eslint-disable-next-line class-methods-use-this
  openSearchModal() {
    const { pristine } = this.state;
    const self = this;

    RNGooglePlaces.openAutocompleteModal(
      {
        country: 'NG',
        initialQuery: !pristine ? self.state.selectedLocation.name : '',
      },
      ['name', 'address', 'location', 'placeID']
    )
      .then(place => {
        self.selectLocation(place);
      })
      .catch(error => console.log(error.message));
  }

  render() {
    const { label } = this.props;
    const { selectedLocation, pristine } = this.state;
    return (
      <TouchableOpacity onPress={() => this.openSearchModal()} style={BaseStyles.input}>
        <RegularText customstyle={{ fontSize: RFValue(10) }}>{label}</RegularText>
        <RegularText
          numberOfLines={1}
          customstyle={{
            margin: 0,
            padding: 0,
            fontSize: RFValue(16),
            color: '#2C3F56',
          }}
        >
          {pristine
            ? 'Please select a location'
            : `${selectedLocation.name}, ${selectedLocation.address}`}
        </RegularText>
      </TouchableOpacity>
    );
  }
}

export default PlaceInput;
