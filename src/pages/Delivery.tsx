import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ActionButtons } from "../components/elements/ActionButtons/ActionButtons";
import { DeliveryCard } from "../components/elements/DeliveryCard/DeliveryCard";
import { RootState } from "../store";
import {
  fetchDelivery,
  makeDeliveryActiveAction,
  updateDeliveryStatusAction,
} from "../store/actions/deliveryAction";
import { IDeliveryReducer } from "../store/reducers/deliveryReducer";
import { getActiveDelivery } from "../utils/delivery";
import { getCurrentLocation } from "../utils/location";

export const Delivery = () => {
  const { delivery, active, loading, error } = useSelector(
    (state: RootState) => state.delivery as IDeliveryReducer
  );
  const dispatch = useDispatch();
  const { deliveryId } = useParams<{ deliveryId: string }>();

  useEffect(() => {
    if (deliveryId) {
      dispatch(fetchDelivery(deliveryId));
    }
  }, [deliveryId, dispatch]);

  const onUpdateDelivery = async (status: string) => {
    try {
      const coords = await getCurrentLocation();
      const payload = {
        delivery: {
          status,
          latitude: coords.latitude,
          longitude: coords.longitude,
        },
      };
      dispatch(updateDeliveryStatusAction(delivery?.id as string, payload));
    } catch (error) {
      alert("Failed to get location");
    }
  };

  const onActivate = () => {
    dispatch(makeDeliveryActiveAction(delivery?.id as string));
  };

  const activeDelivery = getActiveDelivery();

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading...</div>;
  if (!delivery) return <div>Loading...</div>;

  return (
    <div data-testid="delivery-page">
      <DeliveryCard delivery={delivery} />
      <ActionButtons
        id={delivery.id}
        status={delivery.delivery.status}
        active={active}
        activeDelivery={activeDelivery}
        onUpdateDelivery={onUpdateDelivery}
        onActivate={onActivate}
      />
    </div>
  );
};
