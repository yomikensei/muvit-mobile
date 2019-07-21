/* eslint-disable no-unused-vars */
import { all, delay, put, select, take, race, call } from 'redux-saga/effects';
import * as authSaga from './services/auth/sagas';
import * as cardsSaga from './services/cards/sagas';
import * as deliveriesSaga from './services/deliveries/sagas';
import * as paymentsSaga from './services/payments/sagas';
import { getIsLoggedIn, getUser } from './services/auth/reducer';
import { fetchDeliveriesRequest } from './services/deliveries/actions';
import { fetchCardsRequest } from './services/cards/actions';
import { fetchPaymentsRequest } from './services/payments/actions';

function* pullData() {
  while (true) {
    const isLoggedIn = yield select(getIsLoggedIn);
    if (isLoggedIn) {
      // TODO: Sync Organization Details also
      yield put(fetchDeliveriesRequest());
    }
    yield delay(1000 * 60 * 1 / 6);
  }
}

export default function* rootSaga() {
  yield all([
    authSaga.loginSaga(),
    authSaga.signupSaga(),
    cardsSaga.fetchCardsSaga(),
    cardsSaga.createCardSaga(),
    deliveriesSaga.fetchDeliveriesSaga(),
    deliveriesSaga.createDeliverySaga(),
    paymentsSaga.fetchPaymentsSaga(),
    // pullData(),
  ]);
}
