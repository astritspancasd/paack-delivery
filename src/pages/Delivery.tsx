import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  ActionButtons,
  DeliveryCard,
  Error,
  NotFound,
  Spinner,
} from "../components";
import {
  RootState,
  fetchDeliveryAction,
  makeDeliveryActiveAction,
  updateDeliveryStatusAction,
  IDeliveryReducer
} from "../store";
import { getActiveDelivery, getCurrentLocation } from "../utils";

export const Delivery = () => {
  const { delivery, active, loading, error } = useSelector(
    (state: RootState) => state.delivery as IDeliveryReducer
  );
  const dispatch = useDispatch();
  const { deliveryId } = useParams<{ deliveryId: string }>();

  useEffect(() => {
    if (deliveryId) {
      dispatch(fetchDeliveryAction(deliveryId));
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

  if (error) return <Error />;
  if (loading) return <Spinner />;
  if (!delivery) return <NotFound />;

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
