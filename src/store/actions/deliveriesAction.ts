import { Dispatch } from "redux";
import { fetchDelieveriesRequest } from "../../http/requests";
import {
  FETCH_DELIVERIES_LOADING,
  FETCH_DELIVERIES_SUCCESS,
  FETCH_DELIVERIES_FAILURE,
} from "../action-types";
import { IDelivery } from "../types";

const fetchDeliveriesLoading = () => {
  return {
    type: FETCH_DELIVERIES_LOADING,
  };
};

const fetchDeliveriesSuccess = (deliveries: IDelivery[]) => {
  return {
    type: FETCH_DELIVERIES_SUCCESS,
    payload: deliveries,
  };
};

const fetchDeliveriesFailure = (error: string) => {
  return {
    type: FETCH_DELIVERIES_FAILURE,
    payload: error,
  };
};

export const fetchDeliveries = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchDeliveriesLoading());
    try {
      const response = await fetchDelieveriesRequest();
      dispatch(fetchDeliveriesSuccess(response.data));
    } catch (error: any) {
      dispatch(fetchDeliveriesFailure(error.response.data as string));
    }
  };
};
