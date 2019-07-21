/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import { NavigationActions } from 'react-navigation';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import api from '../api';
import * as actions from './actions';
import * as types from './constants';


function* fetchPayments({ page }) {
  try {
    yield console.log(page);
  } catch (error) {
    yield console.log(error);
  }
}

export function* fetchPaymentsSaga() {
  yield takeLatest(types.FETCH_PAYMENTS_REQUEST, fetchPayments);
}
