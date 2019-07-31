import React from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import { Container } from 'native-base';
import IconMD from 'react-native-vector-icons/MaterialIcons';
import IconFA from 'react-native-vector-icons/FontAwesome5';
import FAB from 'react-native-fab';
import AppHeader from 'components/AppHeader';
import colors from 'constants/colors.json';
import { getRides } from 'services/rides/reducer';
import RideItems from './components/RideItem';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  list: {
    justifyContent: 'center',
  },
  view_empty: {
    justifyContent: 'center',
    height: height - 170,
    alignSelf: 'center',
  },
  icon_empty: {
    alignSelf: 'center',
    marginBottom: 20,
    fontSize: 80,
  },
  text_empty: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Raleway-Medium',
    fontSize: 17,
    width: 300,
  },
});

class ListRides extends React.Component {
  render() {
    const {
      navigation: { navigate },
      rides,
    } = this.props;
    return (
      <Container style={styles.container}>
        <AppHeader headerText="Ride History" icon="md-list-box" />
        <FlatList
          data={rides}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <RideItems item={item} />
          )}
          ListEmptyComponent={
            (
              <View style={styles.view_empty}>
                <IconFA style={styles.icon_empty} name="sad-tear" />
                <Text style={styles.text_empty}>
                  You haven't ordered a ride, want to go somewhere?
                </Text>
              </View>
            )
          }
          inverted
        />
        <FAB
          buttonColor={colors.primary}
          iconTextColor="#FFFFFF"
          onClickAction={() => navigate('OrderRide')}
          iconTextComponent={<IconMD name="add" />}
          visible
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  rides: getRides(state),
});

export default connect(mapStateToProps)(ListRides);
