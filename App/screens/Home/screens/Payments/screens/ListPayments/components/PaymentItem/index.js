import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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

const PaymentItem = () => (
  <TouchableOpacity style={styles.card}>
    <View style={styles.container}>
      <View style={styles.row_1}>
        <View>
          <Text>
            Order: #1982819829
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
          Payment Method: Card
        </Text>
        <Text>
          Amount: ₦2000
        </Text>
      </View>
      <View>
        <Badge style={styles.view_badge} warning>
          <Text style={styles.text_badge}>Failed</Text>
        </Badge>
      </View>
    </View>
  </TouchableOpacity>
);

export default PaymentItem;
