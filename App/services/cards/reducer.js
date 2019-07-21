import * as types from './constants';

const initialState = {
  fetchCards: {
    inProgress: false,
    error: false,
  },
  byId: {},
  meta: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CARDS_REQUEST:
      return {
        ...state,
        fetchCards: {
          inProgress: true,
          error: false,
        },
      };

    case types.FETCH_CARDS_FAILURE:
      return {
        ...state,
        fetchCards: {
          inProgress: false,
          error: true,
        },
      };

    case types.FETCH_CARDS_SUCCESS:
      return {
        ...state,
        fetchCards: {
          inProgress: false,
          error: false,
        },
      };

    default:
      return state;
  }
};

export default reducer;
