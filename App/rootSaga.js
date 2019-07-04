import { all } from 'redux-saga/effects';
import * as authSaga from './services/auth/sagas';

export default function* rootSaga() {
  yield all([
    authSaga.loginSaga(),
    authSaga.signupSaga(),
  ]);
}
