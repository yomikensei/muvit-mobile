import * as types from './constants';

export const fetchCardsRequest = (page = 1) => ({
  type: types.FETCH_CARDS_REQUEST,
  page,
});

export const fetchCardsFailure = () => ({
  type: types.FETCH_CARDS_FAILURE,
});

export const fetchCardsSuccess = ({ cards }) => ({
  type: types.FETCH_CARDS_SUCCESS,
  cards,
});

export const createCardRequest = ({ card }) => ({
  type: types.CREATE_CARD_REQUEST,
  card,
});

export const createCardSuccess = ({ card }) => ({
  type: types.CREATE_CARD_SUCCESS,
  card,
});

export const createCardFailure = () => ({
  type: types.CREATE_CARD_FAILURE,
});

export const selectCard = cardId => ({
  type: types.SELECT_CARD,
  cardId,
});
