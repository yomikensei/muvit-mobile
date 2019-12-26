import React from "react";
import { connect } from "react-redux";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import { Container } from "native-base";
import IconFA from "react-native-vector-icons/FontAwesome5";
import IconMD from "react-native-vector-icons/MaterialIcons";
import FAB from "react-native-fab";
import AppHeader from "components/AppHeader";
import colors from "constants/colors.json";
import { getDeliveries } from "services/deliveries/reducer";
import DeliveryItem from "./components/DeliveryItem";

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

class ListDeliveries extends React.Component {
  render() {
    const {
      navigation: { navigate },
      deliveries,
    } = this.props;
    return (
      <Container style={styles.container}>
        <AppHeader headerText="Delivery History" icon="md-list-box" />
        <FlatList
          data={deliveries.reverse()}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <DeliveryItem item={item} navigate={navigate} />
          )}
          ListEmptyComponent={
            (
              <View style={styles.view_empty}>
                <IconFA style={styles.icon_empty} name="sad-tear" navigate={navigate} />
                <Text style={styles.text_empty}>
                  No deliveries available, please order a delivery
                </Text>
              </View>
            )
          }
        />
        <FAB
          buttonColor={colors.primary}
          iconTextColor="#FFFFFF"
          onClickAction={() => navigate('NewDelivery')}
          iconTextComponent={<IconMD name="add" />}
          visible
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  deliveries: getDeliveries(state),
});

export default connect(mapStateToProps)(ListDeliveries);
