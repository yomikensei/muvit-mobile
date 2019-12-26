import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Container } from "native-base";
import AppHeader from "../../../../../../components/AppHeader";
import colors from "../../../../../../constants/colors.json";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
});

class ListSettings extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <AppHeader headerText="Settings" icon="md-list-box" />
        <View>
          <Text>
            Select settings
          </Text>
        </View>
      </Container>
    );
  }
}

export default ListSettings;
