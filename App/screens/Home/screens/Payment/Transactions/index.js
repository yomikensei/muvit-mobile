import React from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import Colors from 'theme/colors.json';
import {RegularText} from 'components/Text';
import TransactionItem from './TransactionItem';

export default ({ isLoading, data, fetchData }) => (
  <View>
    {isLoading && data.length === 0 ? (
      <ActivityIndicator size={30} color={Colors.primary} />
    ) : (
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          refreshing={isLoading && data.length === 0}
          data={data}
          renderItem={({ item }) => <TransactionItem {...item} />}
          keyExtractor={item => item.id}
          ListEmptyComponent={() => <RegularText customstyle={{ textAlign: 'center' }}>No transactions available</RegularText>}
          onRefresh={fetchData}
        />
      </ScrollView>
    )}
  </View>
);
