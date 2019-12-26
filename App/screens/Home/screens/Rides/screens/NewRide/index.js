/* eslint-disable no-shadow */
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRidePricingRequest } from "services/rides/actions";
import { ScrollView, StyleSheet, View } from "react-native";
import { Container } from "native-base";
import AppHeader from "components/AppHeader";
import NewRideForm from "./components/NewRideForm";

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 25,
  },
});

class NewRide extends Component {
  constructor(props) {
    super(props);
    this.fetchPricing = this.fetchPricing.bind(this);
  }

  fetchPricing(values) {
    const { fetchRidePricingRequest } = this.props;
    fetchRidePricingRequest({ ride: values });
  }

  render() {
    const { navigation: { navigate } } = this.props;

    return (
      <Container>
        <AppHeader showBackButton goBack={() => navigate('HomeTab')} headerText="Order a ride" icon="md-list-box" />
        <ScrollView>
          <View style={styles.container}>
            <NewRideForm onSubmit={this.fetchPricing} />
          </View>
        </ScrollView>
      </Container>
    );
  }
}

export default connect(null, { fetchRidePricingRequest })(NewRide);
