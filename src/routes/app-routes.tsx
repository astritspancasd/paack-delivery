import { Routes, Route } from "react-router-dom";
import { routesList } from "./routes-list";

export const AppRoutes = () => {
  return (
    <Routes>
      {routesList.map((route) => {
        return (
          <Route path={route.path} element={route.component} key={route.path} />
        );
      })}
    </Routes>
  );
};
