import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeliveryCard, Error, Spinner } from '../components';
import { RootState, fetchDeliveriesAction, IDeliveriesReducer } from '../store';

export const Deliveries = () => {
  const { deliveries, loading, error } = useSelector(
    (state: RootState) => state.deliveries as IDeliveriesReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDeliveriesAction());
  }, [dispatch]);

  if (error) return <Error />;
  if (loading) return <Spinner />;

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
