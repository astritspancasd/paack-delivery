import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { MockDeliveriesStore } from "../../__mocks__/deliveries";
import { Deliveries } from "../Deliveries";
import { createMemoryHistory } from "history";

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

it("render the correct page", () => {
  const { getByTestId } = renderPage();

  const deliveryPage = getByTestId("deliveries-page");

  expect(deliveryPage).toBeInTheDocument();
});

it("renders 100 deliveries in the screen", () => {
  const { getAllByRole } = renderPage();

  const deliveryList = getAllByRole("link");

  expect(deliveryList).toHaveLength(100);
});

// it("move to next screen after clicking one item in the list", async () => {
//   //   const history = createMemoryHistory();
//   //   const { getAllByRole } = renderPage(history);
//   //   const deliveryList = getAllByRole("link");
//   //   fireEvent.click(deliveryList[0], { button: 0 });
//   //   await waitFor(() => {
//   //     expect(history.location.pathname).toBe("/delivery/1");
//   //   });
// });
