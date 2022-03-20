import { Dispatch } from "redux";
import { ACTIVE_DELIVERY } from "../../constants";
import {
  fetchDelieveryRequest,
  updateDeliveryStatusRequest,
} from "../../http/requests";
import {
  addItemToLocalStorage,
  removeItemFromLocalStorage,
} from "../../utils/storage";
import {
  FETCH_DELIVERY_LOADING,
  FETCH_DELIVERY_SUCCESS,
  FETCH_DELIVERY_FAILURE,
  UPDATE_DELIVERY_STATUS,
  MAKE_DELIVERY_ACTIVE,
} from "../action-types";
import { IDelivery, IDeliveryDetails } from "../types";

const fetchDeliveryLoading = () => {
  return {
    type: FETCH_DELIVERY_LOADING,
  };
};

const fetchDeliverySuccess = (deliveries: IDelivery) => {
  return {
    type: FETCH_DELIVERY_SUCCESS,
    payload: deliveries,
  };
};

const fetchDeliveryFailure = (error: string) => {
  return {
    type: FETCH_DELIVERY_FAILURE,
    payload: error,
  };
};

export const fetchDelivery = (deliveryId: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchDeliveryLoading());
    try {
      const response = await fetchDelieveryRequest(deliveryId);
      dispatch(fetchDeliverySuccess(response.data));
    } catch (error: any) {
      dispatch(fetchDeliveryFailure(error.response.data as string));
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
    dispatch(fetchDeliveryLoading());
    try {
      const response = await updateDeliveryStatusRequest(deliveryId, payload);
      dispatch(updateDeliveryStatus(response.data));
      removeItemFromLocalStorage(ACTIVE_DELIVERY);
    } catch (error: any) {
      dispatch(fetchDeliveryFailure(error.response.data as string));
    }
  };
};
