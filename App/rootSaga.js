/* eslint-disable no-unused-vars */
import { all, delay, put, select, take } from 'redux-saga/effects';
import { PermissionsAndroid } from 'react-native';
import * as authSaga from './services/auth/sagas';
import * as cardsSaga from './services/cards/sagas';
import * as deliveriesSaga from './services/deliveries/sagas';
import * as paymentsSaga from './services/payments/sagas';
import * as ridesSaga from './services/rides/sagas';
import { getIsLoggedIn } from './services/auth/reducer';
import { fetchDeliveriesRequest } from './services/deliveries/actions';
import { fetchCardsRequest } from './services/cards/actions';
import { fetchRidesRequest } from './services/rides/actions';

async function requestApplicationPermissions() {
  try {
    await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      PermissionsAndroid.PERMISSIONS.CAMERA,
      PermissionsAndroid.PERMISSIONS.CALL_PHONE,
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
    ]);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
}

export function* fetchData() {
  // yield put(fetchCardsRequest());
  // yield put(fetchDeliveriesRequest());
  // yield put(fetchRidesRequest());
}

function* pullData() {
  yield take('persist/REHYDRATE');
  while (true) {
    const isLoggedIn = yield select(getIsLoggedIn);
    if (isLoggedIn) {
      yield fetchData();
    }
    yield delay(1000 * 60 * 2);
  }
}

export default function* rootSaga() {
  yield all([
    authSaga.loginSaga(),
    authSaga.signupSaga(),
    authSaga.logoutSaga(),
    cardsSaga.fetchCardsSaga(),
    cardsSaga.createCardSaga(),
    deliveriesSaga.fetchDeliveriesSaga(),
    deliveriesSaga.createDeliverySaga(),
    deliveriesSaga.fetchDeliveryPricingSaga(),
    paymentsSaga.fetchPaymentsSaga(),
    ridesSaga.createRideSaga(),
    ridesSaga.fetchRidePricingSaga(),
    ridesSaga.fetchRidesSaga(),
    pullData(),
    requestApplicationPermissions(),
  ]);
}
