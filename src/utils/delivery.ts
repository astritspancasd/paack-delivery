import { ACTIVE_DELIVERY } from "../constants";
import { getItemFromLocalStorage } from "./storage";

export const isDeliveryActive = (deliveryId: string) =>
  Boolean(getItemFromLocalStorage(ACTIVE_DELIVERY) === deliveryId);

export const getActiveDelivery = () =>
  getItemFromLocalStorage(ACTIVE_DELIVERY) || null;
