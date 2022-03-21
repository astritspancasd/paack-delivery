import { isDeliveryActive } from '../../utils';
import { ActionType } from '../action-types';
import { Action } from '../actions';
import { IDeliveryReducer } from '../types';

const intialState: IDeliveryReducer = {
  delivery: null,
  active: false,
  loading: false,
  error: null,
};

export const deliveryReducer = (state = intialState, action: Action) => {
  switch (action.type) {
    case ActionType.DELIVERY_LOADING: {
      return { ...state, loading: true };
    }
    case ActionType.DELIVERY_SUCCESS: {
      return {
        ...state,
        loading: false,
        delivery: action.payload,
        active: isDeliveryActive(action.payload.id),
      };
    }
    case ActionType.DELIVERY_FAILURE: {
      return { ...state, loading: false, error: action.payload };
    }
    case ActionType.UPDATE_DELIVERY_STATUS: {
      return {
        ...state,
        delivery: action.payload,
        active: false,
        loading: false,
      };
    }
    case ActionType.MAKE_DELIVERY_ACTIVE: {
      return { ...state, active: true };
    }
  }
  return state;
};
