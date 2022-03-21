import { isDeliveryActive } from "../../utils";
import {
  DELIVERY_LOADING,
  DELIVERY_SUCCESS,
  DELIVERY_FAILURE,
  UPDATE_DELIVERY_STATUS,
  MAKE_DELIVERY_ACTIVE,
} from "../action-types";
import { IDelivery, IDeliveryReducer } from "../types";

const intialState: IDeliveryReducer = {
  delivery: null,
  active: false,
  loading: false,
  error: null,
};

export const deliveryReducer = (
  state = intialState,
  action: { type: string; payload: IDelivery }
) => {
  switch (action.type) {
    case DELIVERY_LOADING: {
      return { ...state, loading: true };
    }
    case DELIVERY_SUCCESS: {
      return {
        ...state,
        loading: false,
        delivery: action.payload,
        active: isDeliveryActive(action.payload.id),
      };
    }
    case DELIVERY_FAILURE: {
      return { ...state, loading: false, error: action.payload };
    }
    case UPDATE_DELIVERY_STATUS: {
      return {
        ...state,
        delivery: action.payload,
        active: false,
        loading: false,
      };
    }
    case MAKE_DELIVERY_ACTIVE: {
      return { ...state, active: true };
    }
  }
  return state;
};
