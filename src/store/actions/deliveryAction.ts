import { Dispatch } from "redux";
import { ACTIVE_DELIVERY } from "../../constants";
import {
  fetchDelieveryRequest,
  updateDeliveryStatusRequest,
} from "../../http/requests";
import { addItemToLocalStorage, removeItemFromLocalStorage } from "../../utils";
import {
  DELIVERY_LOADING,
  DELIVERY_SUCCESS,
  DELIVERY_FAILURE,
  UPDATE_DELIVERY_STATUS,
  MAKE_DELIVERY_ACTIVE,
} from "../action-types";
import { IDelivery, IDeliveryDetails } from "../types";

const deliveryLoading = () => {
  return {
    type: DELIVERY_LOADING,
  };
};

const deliverySuccess = (deliveries: IDelivery) => {
  return {
    type: DELIVERY_SUCCESS,
    payload: deliveries,
  };
};

const deliveryFailure = (error: string) => {
  return {
    type: DELIVERY_FAILURE,
    payload: error,
  };
};

export const fetchDeliveryAction = (deliveryId: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(deliveryLoading());
    try {
      const response = await fetchDelieveryRequest(deliveryId);
      dispatch(deliverySuccess(response.data));
    } catch (error: any) {
      dispatch(deliveryFailure(error.response.data as string));
    }
  };
};

export const updateDeliveryStatus = (delivery: IDelivery) => {
  return {
    type: UPDATE_DELIVERY_STATUS,
    payload: delivery,
  };
};

const makeDeliveryActive = () => {
  return {
    type: MAKE_DELIVERY_ACTIVE,
  };
};

export const makeDeliveryActiveAction = (deliveryId: string) => {
  return async (dispatch: Dispatch) => {
    addItemToLocalStorage(ACTIVE_DELIVERY, deliveryId);
    dispatch(makeDeliveryActive());
  };
};

export const updateDeliveryStatusAction = (
  deliveryId: string,
  payload: { delivery: IDeliveryDetails }
) => {
  return async (dispatch: Dispatch) => {
    dispatch(deliveryLoading());
    try {
      const response = await updateDeliveryStatusRequest(deliveryId, payload);
      dispatch(updateDeliveryStatus(response.data));
      removeItemFromLocalStorage(ACTIVE_DELIVERY);
    } catch (error: any) {
      dispatch(deliveryFailure(error.response.data as string));
    }
  };
};
