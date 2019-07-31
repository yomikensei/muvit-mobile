/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import { FlatList, StyleSheet, View, Text, Dimensions } from 'react-native';
import { Container } from 'native-base';
import IconFA from 'react-native-vector-icons/FontAwesome5';
import IconMD from 'react-native-vector-icons/MaterialIcons';
import FAB from 'react-native-fab';
import AppHeader from 'components/AppHeader';
import colors from 'constants/colors.json';
import { getCards, getSelectedCard } from 'services/cards/reducer';
import { selectCard } from 'services/cards/actions';
import CardItem from './components/CardItem';

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
  },
});

class ListCards extends React.Component {
  render() {
    const {
      navigation: { navigate },
      cards,
      selectCard,
      selectedCard,
    } = this.props;
    return (
      <Container style={styles.container}>
        <AppHeader headerText="My Cards" icon="md-list-box" />
        <FlatList
          data={cards}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <CardItem cardColor="#202020" selectCard={() => selectCard(item.id)} isSelectedCard={item.id === selectedCard} item={item} />
          )}
          ListEmptyComponent={
            (
              <View style={styles.view_empty}>
                <IconFA style={styles.icon_empty} name="sad-tear" />
                <Text style={styles.text_empty}>
                  No cards available, please add a card
                </Text>
              </View>
            )
          }
          inverted
        />
        <FAB
          buttonColor={colors.primary}
          iconTextColor="#FFFFFF"
          onClickAction={() => navigate('CreateCard')}
          iconTextComponent={<IconMD name="add" />}
          visible
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cards: getCards(state),
  selectedCard: getSelectedCard(state),
});

export default connect(mapStateToProps, { selectCard })(ListCards);
