import React from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { schemeDark2 } from 'd3-scale-chromatic';
import Colors from 'theme/colors.json';
import { RegularText } from 'components/Text';
import CardItem from './CardItem';

export default ({ isLoading, data, fetchData }) => (
  <View>
    {isLoading && data.length === 0 ? (
      <ActivityIndicator size={30} color={Colors.primary} />
    ) : (
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          refreshing={isLoading && data.length === 0}
          data={data}
          renderItem={({ item, index }) => (
            <CardItem {...{ ...item, backgroundColor: schemeDark2[index % 12] }} />
          )}
          keyExtractor={item => item.id}
          ListEmptyComponent={() => (
            <RegularText>
              No cards available, you can add one by clicking the button in the bottom right
            </RegularText>
          )}
          onRefresh={fetchData}
        />
      </ScrollView>
    )}
  </View>
);
