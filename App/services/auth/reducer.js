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

    default:
      return state;
  }
};
