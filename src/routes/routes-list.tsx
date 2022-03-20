import { Home, Deliveries, Delivery } from "../pages";
import { paths } from "./paths";

export const routesList = [
  {
    path: paths.home,
    component: <Home />,
  },
  {
    path: paths.deliveries,
    component: <Deliveries />,
  },
  {
    path: paths.delivery,
    component: <Delivery />,
  },
];
