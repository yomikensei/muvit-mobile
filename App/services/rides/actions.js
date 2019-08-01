import * as types from './constants';

export const fetchRidesRequest = (page = 1) => ({
  type: types.FETCH_RIDES_REQUEST,
  page,
});

export const fetchRidesFailure = () => ({
  type: types.FETCH_RIDES_FAILURE,
});

export const fetchRidesSuccess = ({ rides }) => ({
  type: types.FETCH_RIDES_SUCCESS,
  rides,
});

export const createRideRequest = ({ ride }) => ({
  type: types.CREATE_RIDE_REQUEST,
  ride,
});

export const createRideSuccess = ({ ride }) => ({
  type: types.CREATE_RIDE_SUCCESS,
  ride,
});

export const createRideFailure = () => ({
  type: types.CREATE_RIDE_FAILURE,
});

export const fetchRidePricingRequest = ({ ride }) => ({
  type: types.FETCH_RIDE_PRICING_REQUEST,
  ride,
});

export const fetchRidePricingSuccess = ({ details }) => ({
  type: types.FETCH_RIDE_PRICING_SUCCESS,
  details,
});

export const fetchRidePricingFailure = () => ({
  type: types.FETCH_RIDE_PRICING_FAILURE,
});
