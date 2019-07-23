/* eslint-disable no-case-declarations */
import * as types from './constants';

const initialState = {
  fetchCards: {
    inProgress: false,
    error: false,
  },
  createCard: {
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

    case types.CREATE_CARD_REQUEST:
      return {
        ...state,
        createCard: {
          inProgress: true,
          error: false,
        },
      };

    case types.CREATE_CARD_FAILURE:
      return {
        ...state,
        createCard: {
          inProgress: false,
          error: true,
        },
      };

    case types.CREATE_CARD_SUCCESS:
      const { byId } = state;
      byId[action.card.id] = action.card;
      return {
        ...state,
        byId,
        createCard: {
          inProgress: false,
          error: false,
        },
      };

    default:
      return state;
  }
};

export default reducer;

export const getCards = ({ app: { entities: { cards: { byId } } } }) => Object.values(byId);
export const getCreateCard = ({ app: { entities: { cards: { createCard } } } }) => createCard;
