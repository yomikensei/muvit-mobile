/* eslint-disable no-unused-vars */
import { NavigationActions } from 'react-navigation';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import api from '../api';
import * as actions from './actions';
import * as types from './constants';


function* fetchCards({ page }) {
  try {
    yield console.log(page);
  } catch (error) {
    yield console.log(error);
  }
}


function* createCard(action) {
  try {
    yield console.log(action);
  } catch (error) {
    yield console.log(error);
  }
}


export function* fetchCardsSaga() {
  yield takeLatest(types.FETCH_CARDS_REQUEST, fetchCards);
}

export function* createCardSaga() {
  yield takeLatest(types.CREATE_CARD_REQUEST, createCard);
}
