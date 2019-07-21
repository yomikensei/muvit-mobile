import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Badge } from 'native-base';

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
  view_badge: {
    borderRadius: 3,
    justifyContent: 'center',
    height: 22,
    marginTop: 10,
  },
  text_badge: {
    color: 'white',
  },
  row_1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

const ItemCard = () => (
  <TouchableOpacity style={styles.card}>
    <View style={styles.container}>
      <View style={styles.row_1}>
        <View>
          <Text>
            #1982819829
          </Text>
        </View>
        <View>
          <Text>
            14/07/2019
          </Text>
        </View>
      </View>
      <View>
        <Text>
          From: Eleganza, Lekki Phase 1
        </Text>
        <Text>
          To: MKO Abiola Gardens, Alausa, Ikeja
        </Text>
      </View>
      <View>
        <Badge style={styles.view_badge} success>
          <Text style={styles.text_badge}>Delivered</Text>
        </Badge>
      </View>
    </View>
  </TouchableOpacity>
);

export default ItemCard;
