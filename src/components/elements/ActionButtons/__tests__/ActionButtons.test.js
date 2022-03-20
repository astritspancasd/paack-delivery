import { ActionButtons } from "../ActionButtons";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

it("displays two buttons when delivery is active", () => {
  const { getAllByRole } = render(<ActionButtons active={true} />);

  const buttonList = getAllByRole("button");

  expect(buttonList).toHaveLength(2);
});

it("displays one button when delivery is not active and status is undelivered", () => {
  const { getAllByRole } = render(
    <ActionButtons active={false} status="undelivered" />
  );

  const buttonList = getAllByRole("button");

  expect(buttonList).toHaveLength(1);
});

it("displays a link when there is an active delivery different from this one", () => {
  const { getAllByRole } = render(
    <ActionButtons active={false} id="11" activeDelivery="12" />,
    { wrapper: MemoryRouter }
  );

  const buttonList = getAllByRole("link");

  expect(buttonList).toHaveLength(1);
});

it("renders null when status is delivered", () => {
  const component = render(<ActionButtons status="delivered" />);

  expect(component.container.innerHTML).toHaveLength(0);
});
