import * as types from './constants';

export const fetchPaymentsRequest = (page = 1) => ({
  type: types.FETCH_PAYMENTS_REQUEST,
  page,
});

export const fetchPaymentsFailure = () => ({
  type: types.FETCH_PAYMENTS_FAILURE,
});

export const fetchPaymentsSuccess = ({ payments }) => ({
  type: types.FETCH_PAYMENTS_SUCCESS,
  payments,
});
