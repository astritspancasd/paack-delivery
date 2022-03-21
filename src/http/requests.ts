import { IDeliveryDetails } from '../store/types';
import { Http } from './http';
import { GET, PUT } from './methods';

export const fetchDelieveriesRequest = () => {
  return Http({
    method: GET,
    url: `/deliveries`,
  });
};

export const fetchDelieveryRequest = (deliveryId: string) => {
  return Http({
    method: GET,
    url: `/deliveries/${deliveryId}`,
  });
};

export const updateDeliveryStatusRequest = (
  deliveryId: string,
  payload: { delivery: IDeliveryDetails }
) => {
  return Http({
    method: PUT,
    url: `/deliveries/${deliveryId}`,
    data: payload,
  });
};
