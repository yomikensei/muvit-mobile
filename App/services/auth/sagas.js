/* eslint-disable no-unused-vars */
import { call, put, takeLatest, select } from 'redux-saga/effects';
import * as types from './constants';
import * as actions from './actions';

function* login(action) {
  yield console.log(action);
}

function* signup(action) {
  yield console.log(action);
}

export function* loginSaga() {
  yield takeLatest(types.LOGIN_REQUEST, login);
}

export function* signupSaga() {
  yield takeLatest(types.SIGNUP_FAILURE, signup);
}
