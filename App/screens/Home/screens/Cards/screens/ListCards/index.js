import React from 'react';
import { connect } from 'react-redux';
import { FlatList, StyleSheet, View, Text, Dimensions } from 'react-native';
import { Container } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MDIcon from 'react-native-vector-icons/MaterialIcons';
import FAB from 'react-native-fab';
import _ from 'lodash';
import AppHeader from '../../../../../../components/AppHeader';
import CardItem from './components/CardItem';
import colors from '../../../../../../constants/colors.json';
import { getCards } from '../../../../../../services/cards/reducer';

const cardColors = ['#385A9D', '#202020', '#191919', '#4D8FA7', '#6E1817'];
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
    } = this.props;
    return (
      <Container style={styles.container}>
        <AppHeader headerText="My Cards" icon="md-list-box" />
        <FlatList
          data={cards}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <CardItem cardColor={_.sample(cardColors)} item={item} />
          )}
          ListEmptyComponent={
           (
             <View style={styles.view_empty}>
               <Icon style={styles.icon_empty} name="sad-tear" />
               <Text style={styles.text_empty}>
                No cards available, please add a card
               </Text>
             </View>
            )
          }
        />
        <FAB
          buttonColor={colors.primary}
          iconTextColor="#FFFFFF"
          onClickAction={() => navigate('CreateCard')}
          iconTextComponent={<MDIcon name="add" />}
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
