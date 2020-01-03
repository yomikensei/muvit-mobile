import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {MediumText} from 'components/Text';
import DashNav from 'components/DashNav';
import Colors from 'theme/colors.json';
import {RFValue} from 'react-native-responsive-fontsize';

import BaseStyles from 'theme/base';
import FAB from 'react-native-fab';
import Icon from 'react-native-vector-icons/FontAwesome5';

import api from 'services/api';

import CardsList from './Cards';
import TransactionsList from './Transactions';
import NewCardDialog from './Cards/NewCardDialog';

export default props => {
  const [tab, setTab] = useState('CARDS');
  const [cards, setCards] = useState({});
  const [transactions, setTransactions] = useState({});
  const [isFetchCardsLoading, setIsFetchCardsLoading] = useState(false);
  const [isFetchTransactionsLoading, setIsFetchTransactionsLoading] = useState(false);
  const [showCreateCardDialog, setShowCreateCardDialog] = useState(false);

  const { navigation } = props;

  const fetchCards = async () => {
    setIsFetchCardsLoading(true);
    try {
      const {
        data: { data },
      } = await api({
        url: '/cards',
        method: 'GET',
      });
      const _data = {};
      data.forEach(item => {
        _data[item.id] = item;
      });
      setCards(_data);
    } catch (e) {
      console.log(e.response ? e.response : e);
    }
    setIsFetchCardsLoading(false);
  };

  const fetchTransactions = async () => {
    setIsFetchTransactionsLoading(true);
    try {
      const {
        data: { data },
      } = await api({
        url: '/transaction',
        method: 'GET',
      });
      const _data = {};
      data.forEach(item => {
        _data[item.id] = item;
      });
      setTransactions(_data);
    } catch (e) {
      console.log(e.response ? e.response : e);
    }
    setIsFetchTransactionsLoading(false);
  };

  useEffect(() => {
    fetchCards();
    fetchTransactions();
  }, []);

  return (
    <View style={BaseStyles.background}>
      <DashNav navigation={navigation} title="Payment" />
      <Tabs {...{ tab, setTab }} />
      <ContentControl
        {...{
          tab,
          fetchCards,
          fetchTransactions,
          cards: Object.values(cards),
          transactions: Object.values(transactions),
          isFetchCardsLoading,
          isFetchTransactionsLoading,
        }}
      />
      <NewCardDialog
        isShown={showCreateCardDialog}
        close={() => setShowCreateCardDialog(false)}
        fetchCards={fetchCards}
      />
      <FAB
        visible={tab === 'CARDS'}
        onClickAction={() => setShowCreateCardDialog(true)}
        buttonColor={Colors.primary}
        iconTextColor="#FFFFFF"
        iconTextComponent={<Icon name="credit-card" />}
      />
    </View>
  );
};

const Tabs = ({ tab, setTab }) => (
  <View style={BaseStyles.tabs}>
    <TouchableOpacity
      onPress={() => setTab('CARDS')}
      style={
        tab === 'CARDS'
          ? { ...BaseStyles.tabButton, backgroundColor: Colors.primary }
          : BaseStyles.tabButton
      }
    >
      <MediumText
        customstyle={
          tab === 'CARDS' ? { fontSize: RFValue(10), color: '#FFF' } : { fontSize: RFValue(10) }
        }
      >
        Cards
      </MediumText>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => setTab('TRANSACTIONS')}
      style={
        tab === 'TRANSACTIONS'
          ? { ...BaseStyles.tabButton, backgroundColor: Colors.primary }
          : BaseStyles.tabButton
      }
    >
      <MediumText
        customstyle={
          tab === 'TRANSACTIONS'
            ? { fontSize: RFValue(10), color: '#FFF' }
            : { fontSize: RFValue(10) }
        }
      >
        Transactions
      </MediumText>
    </TouchableOpacity>
  </View>
);

const ContentControl = ({
  tab,
  cards,
  transactions,
  isFetchCardsLoading,
  isFetchTransactionsLoading,
  fetchCards,
  fetchTransactions,
}) => {
  switch (tab) {
    case 'CARDS':
      return (
        <CardsList {...{ data: cards, isLoading: isFetchCardsLoading, fetchData: fetchCards }} />
      );

    case 'TRANSACTIONS':
      return (
        <TransactionsList
          {...{
            data: transactions,
            isLoading: isFetchTransactionsLoading,
            fetchData: fetchTransactions,
          }}
        />
      );

    default:
      return <View />;
  }
};
