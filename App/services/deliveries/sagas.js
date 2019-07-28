/* eslint-disable no-unused-vars */
import { NavigationActions } from 'react-navigation';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import api from '../api';
import * as actions from './actions';
import * as types from './constants';


function* fetchDeliveries({ page }) {
  try {
    yield console.log(page);
  } catch (error) {
    yield console.log(error);
  }
}


function* createDelivery(action) {
  try {
    yield console.log(action);
  } catch (error) {
    yield console.log(error);
  }
}

function* fetchDeliveryPricing({ delivery }) {
  try {
    const { location_delivery: { placeID: location_delivery }, location_pickup: { placeID: location_pickup } } = delivery;
    const { data: { data: { details } } } = yield call(api, {
      url: '/task/info',
      method: 'post',
      data: {
        location_pickup,
        location_delivery,
      },
    });
    yield put(actions.fetchDeliveryPricingSuccess({ details }));
    yield put(
      NavigationActions.navigate({
        routeName: 'ViewDeliveryPricing',
        params: {
          delivery,
          details,
        },
      }),
    );
  } catch (error) {
    yield put(actions.fetchDeliveryPricingFailure());
    yield console.log(error);
  }
}

export function* fetchDeliveriesSaga() {
  yield takeLatest(types.FETCH_DELIVERIES_REQUEST, fetchDeliveries);
}

export function* createDeliverySaga() {
  yield takeLatest(types.CREATE_DELIVERY_REQUEST, createDelivery);
}

export function* fetchDeliveryPricingSaga() {
  yield takeLatest(types.FETCH_DELIVERY_PRICING_REQUEST, fetchDeliveryPricing);
}
