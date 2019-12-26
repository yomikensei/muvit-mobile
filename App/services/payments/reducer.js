import * as types from './constants';

const initialState = {
  fetchPayments: {
    inProgress: false,
    error: false,
  },
  byId: {},
  meta: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PAYMENTS_REQUEST:
      return {
        ...state,
        fetchPayments: {
          inProgress: true,
          error: false,
        },
      };

    case types.FETCH_PAYMENTS_FAILURE:
      return {
        ...state,
        fetchPayments: {
          inProgress: false,
          error: true,
        },
      };

    case types.FETCH_PAYMENTS_SUCCESS:
      return {
        ...state,
        fetchPayments: {
          inProgress: false,
          error: false,
        },
      };

    default:
      return state;
  }
};

export default reducer;
