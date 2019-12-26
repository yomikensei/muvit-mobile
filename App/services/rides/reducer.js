/* eslint-disable no-case-declarations */
import * as types from './constants';

const initialState = {
  fetchRides: {
    inProgress: false,
    error: false,
  },
  createRide: {
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
    case types.FETCH_RIDES_REQUEST:
      return {
        ...state,
        fetchRides: {
          inProgress: true,
          error: false,
        },
      };

    case types.FETCH_RIDES_FAILURE:
      return {
        ...state,
        fetchRides: {
          inProgress: false,
          error: true,
        },
      };

    case types.FETCH_RIDES_SUCCESS:
      const { rides } = action;
      rides.forEach((ride) => {
        byId[ride.id] = ride;
      });
      return {
        ...state,
        byId,
        fetchRides: {
          inProgress: false,
          error: false,
        },
      };

    case types.CREATE_RIDE_REQUEST:
      return {
        ...state,
        createRide: {
          inProgress: true,
          error: false,
        },
      };

    case types.CREATE_RIDE_FAILURE:
      return {
        ...state,
        createRide: {
          inProgress: false,
          error: true,
        },
      };

    case types.CREATE_RIDE_SUCCESS:
      byId[action.ride.id] = action.ride;
      return {
        ...state,
        byId,
        createRide: {
          inProgress: false,
          error: false,
        },
      };

    case types.FETCH_RIDE_PRICING_REQUEST:
      return {
        ...state,
        fetchPricing: {
          inProgress: true,
          error: false,
        },
      };

    case types.FETCH_RIDE_PRICING_FAILURE:
      return {
        ...state,
        fetchPricing: {
          inProgress: false,
          error: true,
        },
      };

    case types.FETCH_RIDE_PRICING_SUCCESS:
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

export const getRide = ({ app: { entities: { rides: { byId } } } }, id) => byId[id];
export const getRides = ({ app: { entities: { rides: { byId } } } }) => Object.values(byId);
export const getCreateRide = ({ app: { entities: { rides: { createRide } } } }) => createRide;
export const getFetchPricing = ({ app: { entities: { rides: { fetchPricing } } } }) => fetchPricing;
