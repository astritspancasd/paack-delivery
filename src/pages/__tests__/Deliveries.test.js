import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { MockDeliveriesStore } from '../../__mocks__/deliveries';
import { Deliveries } from '../Deliveries';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore({ deliveries: MockDeliveriesStore });

const renderPage = (history) => {
  return render(
    <Provider store={store}>
      <Router history={history}>
        <Deliveries />
      </Router>
    </Provider>
  );
};

it('render the correct page', () => {
  renderPage();

  const deliveryPage =  screen.getByTestId('deliveries-page');

  expect(deliveryPage).toBeInTheDocument();
});

it('renders 100 deliveries in the screen', () => {
  renderPage();

  const deliveryList =  screen.getAllByRole('link');

  expect(deliveryList).toHaveLength(100);
});
