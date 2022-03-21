import { Dispatch } from "redux";
import { fetchDelieveriesRequest } from "../../http";
import { ActionType } from "../action-types";
import { IDelivery } from "../types";

const fetchDeliveriesLoading = () => {
  return {
    type: ActionType.FETCH_DELIVERIES_LOADING,
  };
};

const fetchDeliveriesSuccess = (deliveries: IDelivery[]) => {
  return {
    type: ActionType.FETCH_DELIVERIES_SUCCESS,
    payload: deliveries,
  };
};

const fetchDeliveriesFailure = (error: string) => {
  return {
    type: ActionType.FETCH_DELIVERIES_FAILURE,
    payload: error,
  };
};

export const fetchDeliveriesAction = () => {
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
