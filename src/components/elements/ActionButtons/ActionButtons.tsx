import { FC } from "react";
import { NavLink } from "react-router-dom";
import { DELIVERED, UNDELIVERED } from "../../../constants";

type ActionButtonsProps = {
  id: string;
  status: string;
  active: boolean;
  activeDelivery: string | null;
  onUpdateDelivery: (status: string) => void;
  onActivate: () => void;
};

export const ActionButtons: FC<ActionButtonsProps> = (props) => {
  const { id, status, active, activeDelivery, onUpdateDelivery, onActivate } =
    props;

  if (status === DELIVERED) {
    return null;
  }

  if (activeDelivery && activeDelivery !== id) {
    return (
      <div>
        <p>You can't activate this delivery as there is another one active</p>
        <NavLink to={`/delivery/${activeDelivery}`}>
          Visit active delivery
        </NavLink>
      </div>
    );
  }

  if (active) {
    return (
      <div>
        <button onClick={() => onUpdateDelivery(DELIVERED)}>Deliver</button>
        <button onClick={() => onUpdateDelivery(UNDELIVERED)}>Undeliver</button>
      </div>
    );
  }

  if (!active || status === UNDELIVERED) {
    return (
      <div>
        <button onClick={onActivate}>Make Active</button>
      </div>
    );
  }

  return null;
};
