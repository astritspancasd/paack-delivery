import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { Delivery } from "../Delivery";
import {
  mockDeliveryStore,
  mockedDeliveredDelivery,
  mockedIdleDelivery,
} from "../../__mocks__/delivery";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const createStore = (delivery, active) => {
  return mockStore({
    delivery: mockDeliveryStore(delivery, active),
  });
};

const renderPage = (store) => {
  return render(
    <Provider store={store}>
      <Router>
        <Delivery />
      </Router>
    </Provider>
  );
};

it("renders correct page", () => {
  const { getByTestId } = renderPage(createStore(mockedIdleDelivery, false));

  const deliveryPage = getByTestId("delivery-page");

  expect(deliveryPage).toBeInTheDocument();
});

it("renders make active button when there is no active delivery", async () => {
  const { getByRole } = renderPage(createStore(mockedIdleDelivery, false));

  const button = getByRole("button");

  expect(button).toBeInTheDocument();
});

it("renders two buttons when there is active delivery", async () => {
  const { getAllByRole } = renderPage(createStore(mockedIdleDelivery, true));

  const button = getAllByRole("button");

  expect(button).toHaveLength(2);
});

it("renders delivered when delivery is delivered", async () => {
  const { getByText } = renderPage(createStore(mockedDeliveredDelivery, true));

  const button = getByText(/delivered/i);

  expect(button).toBeInTheDocument();
});
