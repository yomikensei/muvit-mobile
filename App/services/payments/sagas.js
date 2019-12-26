/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import { takeLatest } from 'redux-saga/effects';
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
