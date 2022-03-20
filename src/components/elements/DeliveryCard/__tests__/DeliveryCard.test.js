import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { mockedDelivery } from "../../../../__mocks__/delivery";
import { DeliveryCard } from "../DeliveryCard";

it("displays navigation link when canNavigate prop is true", () => {
  const { getAllByRole } = render(
    <DeliveryCard canNavigate={true} delivery={mockedDelivery} />,
    {
      wrapper: MemoryRouter,
    }
  );

  const buttonList = getAllByRole("link");

  expect(buttonList).toHaveLength(1);
});
