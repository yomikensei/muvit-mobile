import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, View } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import BaseStyles from 'theme/base';
import { BoldText } from 'components/Text';
import { RFValue } from 'react-native-responsive-fontsize';
import NewDelivery from './NewDelivery';

const mapOptions = {
  enableHighAccuracy: true,
  timeout: 10000,
  maximumAge: 2000,
};

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.015;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header: {
    paddingVertical: RFValue(20),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
  },
  action_prompt: {
    width: '100%',
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: RFValue(25),
    paddingHorizontal: RFValue(20),
  },
});

export default () => {
  const [coordinates, setCoordinates] = useState({ latitude: 0, longitude: 0 });
  const [isLocationLoading, setIsLocationLoading] = useState(false);

  const fetchLocationData = async () => {
    setIsLocationLoading(true);
    try {
      Geolocation.getCurrentPosition(
        result => {
          console.log(result);
          setCoordinates({ latitude: result.coords.latitude, longitude: result.coords.longitude });
        },
        e => {
          console.log(e.response ? e.response : e);
        },
        mapOptions,
      );
    } catch (e) {
      console.log(e.response ? e.response : e);
    }
    setIsLocationLoading(false);
  };

  useEffect(() => {
    fetchLocationData();
  }, []);

  return (
    <View style={styles.background}>
      {isLocationLoading ? (
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '90%',
          }}
        >
          <ActivityIndicator style={{ justifyContent: 'center' }} size={45} />
        </View>
      ) : (
        <MapView
          provider={PROVIDER_GOOGLE}
          style={BaseStyles.map}
          region={{
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
          showsUserLocation
        />
      )}

      <View style={styles.container}>
        <View style={styles.header}>
          <BoldText
            customstyle={{
              fontSize: RFValue(20),
              backgroundColor: '#FFF',
              borderRadius: 10,
              elevation: 10,
              paddingVertical: RFValue(10),
              paddingHorizontal: RFValue(10),
            }}
          >
            Hail a driver
          </BoldText>
        </View>

        <ActionPrompt />
      </View>
    </View>
  );
};

const ActionPrompt = () => {
  const [state, setState] = useState('CREATE');
  const [type, setType] = useState('DELIVERY');
  return (
    <View style={styles.action_prompt}>
      <PromptControl {...{ state, type }} />
    </View>
  );
};

const PromptControl = ({ state, type }) => {
  switch (`${state}_${type}`) {
    case 'CREATE_DELIVERY':
      return <NewDelivery />;

    default:
      return <View />;
  }
};
