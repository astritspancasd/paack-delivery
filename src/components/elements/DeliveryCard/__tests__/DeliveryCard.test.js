import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { mockedIdleDelivery } from '../../../../__mocks__/delivery';
import { DeliveryCard } from '../DeliveryCard';

it('displays navigation link when canNavigate prop is true', () => {
  render(
    <DeliveryCard canNavigate={true} delivery={mockedIdleDelivery} />,
    {
      wrapper: MemoryRouter,
    }
  );

  const buttonList =  screen.getAllByRole('link');

  expect(buttonList).toHaveLength(1);
});
