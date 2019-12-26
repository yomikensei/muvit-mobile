/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import { NavigationActions } from 'react-navigation';
import { call, put, takeLatest } from 'redux-saga/effects';
import RNPaystack from 'react-native-paystack';
import Snackbar from 'react-native-snackbar';
import api from '../api';
import * as actions from './actions';
import * as types from './constants';


function* fetchCards({ page }) {
  try {
    const { data: { data: cards } } = yield call(api, {
      method: 'get',
      url: '/cards',
    });
    yield put(actions.fetchCardsSuccess({ cards }));
  } catch (error) {
    yield console.log(error);
    yield put(actions.fetchCardsFailure());
  }
}

function* createCard({ card: _card }) {
  try {
    const { data: { data: { access_code: accessCode } } } = yield call(api, {
      method: 'get',
      url: '/card/initialize',
    });
    const { reference } = yield RNPaystack.chargeCardWithAccessCode({
      ..._card,
      accessCode,
    });
    const { data: { data: { card } } } = yield call(api, {
      method: 'post',
      url: '/card',
      data: {
        transaction_reference: reference,
      },
    });
    yield put(actions.createCardSuccess({ card }));
    yield put(
      NavigationActions.navigate({
        routeName: 'HomeTab',
      }),
    );
    yield Snackbar.show({
      title: 'Card added successfully',
      duration: Snackbar.LENGTH_SHORT,
    });
  } catch (error) {
    yield put(actions.createCardFailure());
    yield Snackbar.show({
      title: 'Unable to add card',
      duration: Snackbar.LENGTH_SHORT,
    });
    yield console.log(error.response);
    yield console.log(error.message);
    yield console.log(error.code);
  }
}


export function* fetchCardsSaga() {
  yield takeLatest(types.FETCH_CARDS_REQUEST, fetchCards);
}

export function* createCardSaga() {
  yield takeLatest(types.CREATE_CARD_REQUEST, createCard);
}
