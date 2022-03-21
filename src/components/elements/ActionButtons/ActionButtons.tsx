import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../../ui';
import { DELIVERED, UNDELIVERED } from '../../../constants';

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
      <>
        <p>You can't activate this delivery as there is another one active</p>
        <NavLink to={`/delivery/${activeDelivery}`}>
          Visit active delivery
        </NavLink>
      </>
    );
  }

  if (active) {
    return (
      <>
        <Button onClick={() => onUpdateDelivery(DELIVERED)}>Deliver</Button>
        <Button onClick={() => onUpdateDelivery(UNDELIVERED)}>Undeliver</Button>
      </>
    );
  }

  if (!active || status === UNDELIVERED) {
    return <Button onClick={onActivate}>Make Active</Button>;
  }

  return null;
};
