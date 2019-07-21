import * as types from './constants';

export const fetchDeliveriesRequest = (page = 1) => ({
  type: types.FETCH_DELIVERIES_REQUEST,
  page,
});

export const fetchDeliveriesFailure = () => ({
  type: types.FETCH_DELIVERIES_FAILURE,
});

export const fetchDeliveriesSuccess = ({ deliveries }) => ({
  type: types.FETCH_DELIVERIES_SUCCESS,
  deliveries,
});

export const createDeliveryRequest = ({ delivery }) => ({
  type: types.CREATE_DELIVERY_REQUEST,
  delivery,
});

export const createDeliverySuccess = ({ delivery }) => ({
  type: types.CREATE_DELIVERY_SUCCESS,
  delivery,
});

export const createDeliveryFailure = () => ({
  type: types.CREATE_DELIVERY_FAILURE,
});
