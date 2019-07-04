import * as types from './constants';

export const signupRequest = ({ credentials }) => ({
  type: types.SIGNUP_REQUEST,
  credentials,
});

export const signupSuccess = ({ authInfo }) => ({
  type: types.SIGNUP_SUCCESS,
  authInfo,
});

export const signupFailure = ({ error }) => ({
  type: types.SIGNUP_FAILURE,
  error,
});

export const loginRequest = ({ credentials }) => ({
  type: types.LOGIN_REQUEST,
  credentials,
});

export const loginSuccess = ({ authInfo }) => ({
  type: types.LOGIN_SUCCESS,
  authInfo,
});

export const loginFailure = ({ error }) => ({
  type: types.LOGIN_FAILURE,
  error,
});

export const logoutRequest = ({ force } = { force: false }) => ({
  type: types.LOGOUT_REQUEST,
  force,
});

export const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});

export const logoutFailure = () => ({
  type: types.LOGOUT_FAILURE,
});
