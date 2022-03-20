import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeliveryCard } from "../components/elements/DeliveryCard/DeliveryCard";
import { RootState } from "../store";
import { fetchDeliveries } from "../store/actions/deliveriesAction";
import { IDeliveriesReducer } from "../store/reducers/deliveriesReducer";

export const Deliveries = () => {
  const { deliveries, loading, error } = useSelector(
    (state: RootState) => state.deliveries as IDeliveriesReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDeliveries());
  }, [dispatch]);

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <div data-testid="deliveries-page">
      {deliveries.map((delivery) => {
        return (
          <DeliveryCard key={delivery.id} delivery={delivery} canNavigate />
        );
      })}
    </div>
  );
};
