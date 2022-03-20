import { FC } from "react";
import { NavLink } from "react-router-dom";
import { IDelivery } from "../../../store/types";
import { IF } from "../../others/IF";

type DeliveryCardProps = {
  delivery: IDelivery;
  canNavigate?: boolean;
};

export const DeliveryCard: FC<DeliveryCardProps> = (props) => {
  const { canNavigate } = props;
  const { id, delivery, customer, client } = props.delivery;

  return (
    <div>
      <div>Id: {id}</div>
      <div>Client: {client}</div>
      <div>Delivery status: {delivery.status}</div>
      <div>Customer name: {customer.name}</div>
      <div>Customer address: {customer.address}</div>
      <div>Delivery Status: {delivery.status}</div>
      <IF condition={Boolean(canNavigate)}>
        <NavLink to={`/delivery/${id}`}>Navigate to delivery</NavLink>
      </IF>
    </div>
  );
};
