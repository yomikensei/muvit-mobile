/* eslint-disable prefer-destructuring */
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
  selectedCard: null,
  byId: {},
  meta: {},
};

const reducer = (state = initialState, action) => {
  // eslint-disable-next-line prefer-const
  let { byId, selectedCard } = state;
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
      const { cards } = action;
      byId = state.byId;
      cards.forEach((card) => {
        byId[card.id] = card;
      });
      return {
        ...state,
        byId,
        selectedCard: (!selectedCard && (cards.length > 0)) ? cards[0].id : selectedCard,
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
      byId[action.card.id] = action.card;
      return {
        ...state,
        byId,
        selectedCard: action.card.id,
        createCard: {
          inProgress: false,
          error: false,
        },
      };

    case types.SELECT_CARD:
      return {
        ...state,
        selectedCard: action.cardId,
      };

    default:
      return state;
  }
};

export default reducer;

export const getCards = ({ app: { entities: { cards: { byId } } } }) => Object.values(byId);
export const getCreateCard = ({ app: { entities: { cards: { createCard } } } }) => createCard;
export const getSelectedCard = ({ app: { entities: { cards: { selectedCard } } } }) => selectedCard;
