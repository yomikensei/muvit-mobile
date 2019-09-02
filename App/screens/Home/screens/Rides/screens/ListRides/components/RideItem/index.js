import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import moment from 'moment';

const styles = StyleSheet.create({
  card: {
    elevation: 5,
    marginVertical: 10,
    backgroundColor: '#ffffff',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 7,
  },
  container: {
    margin: 15,
  },
  text_status: {
    borderRadius: 3,
    justifyContent: 'center',
    height: 22,
    marginTop: 10,
    fontFamily: 'Raleway-Bold',
  },
  row_1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

const ItemCard = ({ item: ride, navigate }) => {
  let { createdAt } = ride;
  createdAt = moment(createdAt).format('DD.MM.YYYY HH:mm A');
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        navigate('ViewRide', {
          id: ride.id,
        });
      }}
    >
      <View style={styles.container}>
        <View style={styles.row_1}>
          <View>
            <Text style={{ fontFamily: 'Raleway-SemiBold', color: 'black' }}>
              {`#${ride.code}`}
            </Text>
          </View>
          <View>
            <Text numberOfLines={1}>
              {createdAt}
            </Text>
          </View>
        </View>
        <View>
          <Text
            numberOfLines={1}
          >
            {`From: ${ride.location_origin.name}, ${ride.location_origin.address}`}
          </Text>
          <Text
            numberOfLines={1}
          >
            {`To: ${ride.location_destination.name}, ${ride.location_destination.address}`}
          </Text>
        </View>
        <View>
          <Text
            style={{ ...styles.text_status, color: ride.completion_status === 'complete' ? 'green' : 'orange' }}
          >
            {ride.completion_status.toUpperCase()}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemCard;
