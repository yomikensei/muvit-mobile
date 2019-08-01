/* eslint-disable no-case-declarations */
import * as types from './constants';

const initialState = {
  fetchDeliveries: {
    inProgress: false,
    error: false,
  },
  createDelivery: {
    inProgress: false,
    error: false,
  },
  fetchPricing: {
    inProgress: false,
    error: false,
  },
  byId: {},
  meta: {},
};

const reducer = (state = initialState, action) => {
  const { byId } = state;
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
      const { deliveries } = action;
      deliveries.forEach((delivery) => {
        byId[delivery.id] = delivery;
      });
      return {
        ...state,
        byId,
        fetchDeliveries: {
          inProgress: false,
          error: false,
        },
      };

    case types.CREATE_DELIVERY_REQUEST:
      return {
        ...state,
        createDelivery: {
          inProgress: true,
          error: false,
        },
      };

    case types.CREATE_DELIVERY_FAILURE:
      return {
        ...state,
        createDelivery: {
          inProgress: false,
          error: true,
        },
      };

    case types.CREATE_DELIVERY_SUCCESS:
      byId[action.delivery.id] = action.delivery;
      return {
        ...state,
        byId,
        createDelivery: {
          inProgress: false,
          error: false,
        },
      };

    case types.FETCH_DELIVERY_PRICING_REQUEST:
      return {
        ...state,
        fetchPricing: {
          inProgress: true,
          error: false,
        },
      };

    case types.FETCH_DELIVERY_PRICING_FAILURE:
      return {
        ...state,
        fetchPricing: {
          inProgress: false,
          error: true,
        },
      };

    case types.FETCH_DELIVERY_PRICING_SUCCESS:
      return {
        ...state,
        fetchPricing: {
          inProgress: false,
          error: false,
        },
      };


    default:
      return state;
  }
};

export default reducer;

export const getDelivery = ({ app: { entities: { deliveries: { byId } } } }, id) => byId[id];
export const getDeliveries = ({ app: { entities: { deliveries: { byId } } } }) => Object.values(byId);
export const getCreateDelivery = ({ app: { entities: { deliveries: { createDelivery } } } }) => createDelivery;
export const getFetchPricing = ({ app: { entities: { deliveries: { fetchPricing } } } }) => fetchPricing;
