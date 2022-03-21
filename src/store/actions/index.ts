import { ActionType } from '../action-types';
import { IDelivery } from '../types';

interface FetchDeliveriesLoadingAction {
  type: ActionType.FETCH_DELIVERIES_LOADING;
}

interface FetchDeliveriesSuccessAction {
  type: ActionType.FETCH_DELIVERIES_SUCCESS;
  payload: IDelivery[];
}

interface FetchDeliveriesFailure {
  type: ActionType.FETCH_DELIVERIES_FAILURE;
  payload: string;
}

interface DeliveryLoadingAction {
  type: ActionType.DELIVERY_LOADING;
}

interface DeliverySuccessAction {
  type: ActionType.DELIVERY_SUCCESS;
  payload: IDelivery;
}

interface DeliveryFailureAction {
  type: ActionType.DELIVERY_FAILURE;
  payload: string;
}

interface UpdateDeliveryStatusAction {
  type: ActionType.UPDATE_DELIVERY_STATUS;
  payload: IDelivery;
}

interface MakeDeliveryActiveAction {
  type: ActionType.MAKE_DELIVERY_ACTIVE;
}

export type Action =
  | FetchDeliveriesLoadingAction
  | FetchDeliveriesSuccessAction
  | FetchDeliveriesFailure
  | DeliveryLoadingAction
  | DeliverySuccessAction
  | DeliveryFailureAction
  | UpdateDeliveryStatusAction
  | MakeDeliveryActiveAction;
