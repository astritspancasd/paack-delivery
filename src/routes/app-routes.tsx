import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Spinner } from '../components/ui/Spinner';
import { routesList } from './routes-list';

export const AppRoutes = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        {routesList.map((route) => {
          return (
            <Route
              path={route.path}
              element={route.component}
              key={route.path}
            />
          );
        })}
      </Routes>
    </Suspense>
  );
};
