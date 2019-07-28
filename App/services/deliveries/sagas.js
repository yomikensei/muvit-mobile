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

function* fetchDeliveryPricing(action) {
  try {
    yield console.log(action);
  } catch (error) {
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
