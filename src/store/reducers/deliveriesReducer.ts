import { IDelivery, IDeliveriesReducer } from "../types";
import {
  FETCH_DELIVERIES_FAILURE,
  FETCH_DELIVERIES_LOADING,
  FETCH_DELIVERIES_SUCCESS,
} from "../action-types";

const intialState: IDeliveriesReducer = {
  deliveries: [],
  loading: false,
  error: null,
};

export const deliveriesReducer = (
  state = intialState,
  action: { type: string; payload: IDelivery[] | string | undefined }
) => {
  switch (action.type) {
    case FETCH_DELIVERIES_LOADING: {
      return { ...state, loading: true };
    }
    case FETCH_DELIVERIES_SUCCESS: {
      return { ...state, loading: false, deliveries: action.payload };
    }
    case FETCH_DELIVERIES_FAILURE: {
      return { ...state, loading: false, error: action.payload };
    }
  }
  return state;
};
