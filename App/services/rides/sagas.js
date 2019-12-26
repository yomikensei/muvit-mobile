/* eslint-disable no-unused-vars */
import { NavigationActions } from 'react-navigation';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import Snackbar from 'react-native-snackbar';
import { getSelectedCard } from 'services/cards/reducer';
import api from 'services/api';
import * as actions from './actions';
import * as types from './constants';

function* fetchRides({ page }) {
  try {
    const { data: { data: rides } } = yield call(api, {
      method: 'get',
      url: '/ride',
    });
    yield put(actions.fetchRidesSuccess({ rides }));
  } catch (error) {
    yield console.log(error);
    yield put(actions.fetchRidesFailure());
  }
}

function* createRide({ ride }) {
  try {
    const card = yield select(getSelectedCard);
    const { data: { data: { ride: _ride } } } = yield call(api, {
      method: 'post',
      url: '/ride',
      data: {
        ...ride,
        card,
        payment_method: 'card',
      },
    });
    yield put(actions.createRideSuccess({ ride: _ride }));
    yield put(
      NavigationActions.navigate({
        routeName: 'HomeTab',
      }),
    );
    yield Snackbar.show({
      title: 'Ride created successfully',
      duration: Snackbar.LENGTH_SHORT,
    });
  } catch (error) {
    yield console.log(error.response);
    yield put(actions.createRideFailure());
    yield Snackbar.show({
      title: 'Failed to create ride, please try again in a moment',
      duration: Snackbar.LENGTH_SHORT,
    });
  }
}

function* fetchRidePricing({ ride }) {
  try {
    const { location_origin: { placeID: location_origin }, location_destination: { placeID: location_destination }, return_trip } = ride;
    const { data: { data: { details } } } = yield call(api, {
      url: '/ride/info',
      method: 'post',
      data: {
        location_origin,
        location_destination,
        return_trip,
      },
    });
    yield put(actions.fetchRidePricingSuccess({ details }));
    yield put(
      NavigationActions.navigate({
        routeName: 'ViewRidePricing',
        params: {
          ride,
          details,
        },
      }),
    );
  } catch (error) {
    yield put(actions.fetchRidePricingFailure());
    yield console.log(error);
  }
}

export function* fetchRidesSaga() {
  yield takeLatest(types.FETCH_RIDES_REQUEST, fetchRides);
}

export function* createRideSaga() {
  yield takeLatest(types.CREATE_RIDE_REQUEST, createRide);
}

export function* fetchRidePricingSaga() {
  yield takeLatest(types.FETCH_RIDE_PRICING_REQUEST, fetchRidePricing);
}
