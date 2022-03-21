import { lazyImport } from '../utils';
import { paths } from './paths';

const { Home } = lazyImport(() => import('../pages'), 'Home');
const { Deliveries } = lazyImport(() => import('../pages'), 'Deliveries');
const { Delivery } = lazyImport(() => import('../pages'), 'Delivery');

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
