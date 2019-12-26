import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import moment from "moment";

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

const ItemCard = ({ item: delivery, navigate }) => {
  let { createdAt } = delivery;
  createdAt = moment(createdAt).format('DD.MM.YYYY HH:mm A');
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => { navigate('ViewDelivery', { id: delivery.id }); }}
    >
      <View style={styles.container}>
        <View style={styles.row_1}>
          <View>
            <Text style={{ fontFamily: 'Raleway-SemiBold', color: 'black' }}>
              {`#${delivery.code}`}
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
            {`From: ${delivery.location_pickup.name}, ${delivery.location_pickup.address}`}
          </Text>
          <Text
            numberOfLines={1}
          >
            {`To: ${delivery.location_delivery.name}, ${delivery.location_delivery.address}`}
          </Text>
        </View>
        <View>
          <Text
            style={{ ...styles.text_status, color: delivery.completion_status === 'complete' ? 'green' : 'orange' }}
          >
            {delivery.completion_status.toUpperCase()}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemCard;
