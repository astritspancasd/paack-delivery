import { ActionButtons } from '../ActionButtons';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

it('displays two buttons when delivery is active', () => {
  render(<ActionButtons active={true} />);

  const buttonList =  screen.getAllByRole('button');

  expect(buttonList).toHaveLength(2);
});

it('displays one button when delivery is not active and status is undelivered', () => {
  render(
    <ActionButtons active={false} status="undelivered" />
  );

  const buttonList = screen.getAllByRole('button');

  expect(buttonList).toHaveLength(1);
});

it('displays a link when there is an active delivery different from this one', () => {
  render(
    <ActionButtons active={false} id="11" activeDelivery="12" />,
    { wrapper: MemoryRouter }
  );

  const buttonList = screen.getAllByRole('link');

  expect(buttonList).toHaveLength(1);
});

it('renders null when status is delivered', () => {
  const view = render(<ActionButtons status="delivered" />);

  expect(view.container.innerHTML).toHaveLength(0);
});
