/* eslint-disable no-unused-vars */
import { call, put, takeLatest, select } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';
import { reset } from 'redux-form';
import * as types from './constants';
import * as actions from './actions';
import api from '../api';
import { clearState, saveState } from '../../localStorage';

function* login({ credentials }) {
  try {
    const { data: { user, token } } = yield call(api, {
      url: '/user/login',
      data: credentials,
      method: 'post',
    });
    yield put(actions.loginSuccess({ authInfo: { user } }));
    yield saveState({ user, token });
    yield put(
      NavigationActions.navigate({
        routeName: 'Home',
      }),
    );
    yield put(reset('loginForm'));
  } catch (error) {
    console.log(error.response);
    yield put(actions.loginFailure());
  }
}

function* signup({ credentials }) {
  try {
    const { data: { user, token } } = yield call(api, {
      url: '/user/signup',
      data: credentials,
      method: 'post',
    });
    yield put(actions.signupSuccess({ authInfo: { user } }));
    yield saveState({ user, token });
    yield put(
      NavigationActions.navigate({
        routeName: 'Home',
      }),
    );
    yield put(reset('signupForm'));
  } catch (error) {
    yield put(actions.signupFailure());
    console.log(error.response);
  }
}

export function* loginSaga() {
  yield takeLatest(types.LOGIN_REQUEST, login);
}

export function* signupSaga() {
  yield takeLatest(types.SIGNUP_REQUEST, signup);
}
