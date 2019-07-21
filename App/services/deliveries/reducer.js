import * as types from './constants';

const initialState = {
  fetchDeliveries: {
    inProgress: false,
    error: false,
  },
  byId: {},
  meta: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_DELIVERIES_REQUEST:
      return {
        ...state,
        fetchDeliveries: {
          inProgress: true,
          error: false,
        },
      };

    case types.FETCH_DELIVERIES_FAILURE:
      return {
        ...state,
        fetchDeliveries: {
          inProgress: false,
          error: true,
        },
      };

    case types.FETCH_DELIVERIES_SUCCESS:
      return {
        ...state,
        fetchDeliveries: {
          inProgress: false,
          error: false,
        },
      };

    default:
      return state;
  }
};

export default reducer;
