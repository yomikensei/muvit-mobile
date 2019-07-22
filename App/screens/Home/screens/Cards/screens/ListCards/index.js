import React from 'react';
import { connect } from 'react-redux';
import { FlatList, StyleSheet } from 'react-native';
import { Container } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FAB from 'react-native-fab';
import _ from 'lodash';
import AppHeader from '../../../../../../components/AppHeader';
import CardItem from './components/CardItem';
import colors from '../../../../../../constants/colors.json';
import { getCards } from '../../../../../../services/cards/reducer';

const cardColors = ['#385A9D', '#202020', '#191919', '#4D8FA7', '#6E1817'];

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  list: {
    justifyContent: 'center',
  },
});

class ListCards extends React.Component {
  render() {
    const {
      navigation: { navigate },
      cards,
    } = this.props;
    console.log(cards);
    return (
      <Container style={styles.container}>
        <AppHeader headerText="My Cards" icon="md-list-box" />
        <FlatList
          data={cards}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <CardItem cardColor={_.sample(cardColors)} item={item} />
          )}
        />
        <FAB
          buttonColor={colors.primary}
          iconTextColor="#FFFFFF"
          onClickAction={() => navigate('CreateCard')}
          iconTextComponent={<Icon name="add" />}
          visible
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cards: getCards(state),
});

export default connect(mapStateToProps)(ListCards);
