/* eslint-disable no-unused-vars */
import { all, delay, put, select, take, race, call } from 'redux-saga/effects';
import * as authSaga from './services/auth/sagas';
import * as cardsSaga from './services/cards/sagas';
import * as deliveriesSaga from './services/deliveries/sagas';
import * as paymentsSaga from './services/payments/sagas';
import * as ridesSaga from './services/rides/sagas';
import { getIsLoggedIn, getUser } from './services/auth/reducer';
import { fetchDeliveriesRequest } from './services/deliveries/actions';
import { fetchCardsRequest } from './services/cards/actions';

function* pullData() {
  while (true) {
    const isLoggedIn = yield select(getIsLoggedIn);
    if (isLoggedIn) {
      yield put(fetchDeliveriesRequest());
      yield put(fetchCardsRequest());
    }
    yield delay(1000 * 60 * 2);
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
    deliveriesSaga.fetchDeliveryPricingSaga(),
    paymentsSaga.fetchPaymentsSaga(),
    ridesSaga.createRideSaga(),
    ridesSaga.fetchRidePricingSaga(),
    pullData(),
  ]);
}
