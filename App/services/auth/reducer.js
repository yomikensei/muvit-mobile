/* eslint-disable no-case-declarations */
import * as types from './constants';

const initialState = {
  user: null,
  fetchUserDetails: {
    inProgress: false,
    error: null,
  },
  login: {
    inProgress: false,
    error: null,
  },
  signup: {
    inProgress: false,
    error: null,
  },
  logout: {
    inProgress: false,
    error: null,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        login: {
          inProgress: true,
          error: null,
        },
      };

    case types.SIGNUP_REQUEST:
      return {
        ...state,
        signup: {
          inProgress: true,
          error: null,
        },
      };

    case types.SIGNUP_SUCCESS:
      const { authInfo: { user } } = action;
      return {
        ...state,
        user,
        signup: {
          inProgress: false,
          error: null,
        },
      };

    case types.SIGNUP_FAILURE:
      return {
        ...state,
        signup: {
          inProgress: false,
          error: null,
        },
      };

    default:
      return state;
  }
};
