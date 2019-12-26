/* eslint-disable no-unused-vars */
import { NavigationActions } from 'react-navigation';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import Snackbar from 'react-native-snackbar';
import { getSelectedCard } from 'services/cards/reducer';
import api from '../api';
import * as actions from './actions';
import * as types from './constants';


function* fetchDeliveries({ page }) {
  try {
    const { data: { data: deliveries } } = yield call(api, {
      method: 'get',
      url: '/tasks',
    });
    yield put(actions.fetchDeliveriesSuccess({ deliveries }));
  } catch (error) {
    yield console.log(error);
    yield put(actions.fetchDeliveriesFailure());
  }
}


function* createDelivery({ delivery }) {
  try {
    const card = yield select(getSelectedCard);
    const { data: { data: { task } } } = yield call(api, {
      method: 'post',
      url: '/task',
      data: {
        ...delivery,
        card,
        payment_method: 'card',
      },
    });
    yield put(actions.createDeliverySuccess({ delivery: task }));
    yield put(
      NavigationActions.navigate({
        routeName: 'HomeTab',
      }),
    );
    yield Snackbar.show({
      title: 'Delivery created successfully',
      duration: Snackbar.LENGTH_SHORT,
    });
  } catch (error) {
    yield console.log(error);
    yield put(actions.createDeliveryFailure());
    yield Snackbar.show({
      title: 'Failed to create delivery, please try again in a moment',
      duration: Snackbar.LENGTH_SHORT,
    });
  }
}

function* fetchDeliveryPricing({ delivery }) {
  try {
    const { location_delivery: { placeID: location_delivery }, location_pickup: { placeID: location_pickup }, return_trip } = delivery;
    const { data: { data: { details } } } = yield call(api, {
      url: '/task/info',
      method: 'post',
      data: {
        location_pickup,
        location_delivery,
        return_trip,
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
