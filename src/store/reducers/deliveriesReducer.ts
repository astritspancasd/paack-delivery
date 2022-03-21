import { ActionType } from '../action-types';
import { Action } from '../actions';
import { IDeliveriesReducer } from '../types';

const intialState: IDeliveriesReducer = {
  deliveries: [],
  loading: false,
  error: null,
};

export const deliveriesReducer = (state = intialState, action: Action) => {
  switch (action.type) {
    case ActionType.FETCH_DELIVERIES_LOADING: {
      return { ...state, loading: true };
    }
    case ActionType.FETCH_DELIVERIES_SUCCESS: {
      return { ...state, loading: false, deliveries: action.payload };
    }
    case ActionType.FETCH_DELIVERIES_FAILURE: {
      return { ...state, loading: false, error: action.payload };
    }
  }
  return state;
};
