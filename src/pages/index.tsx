// Work in Progress when authentication module is completed

import { Navigate, Route, Routes } from "react-router-dom";
// import {
//   CommonUserRoutes,
//   ManagerUserRoutes,
//   RegularUserRoutes,
// } from "../routes/privates";
import { PublicRoutes } from "../routes/public";
// import { useRecoilValue } from "recoil";
import { useMemo } from "react";
import { IRoute } from "../types";

export function AppRouter() {

  const availableRoutes = useMemo((): IRoute[] => {
    const routes: IRoute[] = [];
    routes.push(...PublicRoutes);
    routes.push({ path: "*", Component: () => <Navigate to="/" /> });

    // if (isAuthenticated) {
    //   routes.push(...CommonUserRoutes);
    // } else {
    //   routes.push(...PublicRoutes);
    //   routes.push({ path: "*", Component: () => <Navigate to="/login" /> });
    //}

    // if (isAuthenticated && hasRole("regular")) {
    //   routes.push(...RegularUserRoutes);
    // }

    // if (isAuthenticated && hasRole("manager")) {
    //   routes.push(...ManagerUserRoutes);
    // }

    // if (isAuthenticated) {
    //   routes.push({ path: "*", Component: () => <Navigate to="/" /> });
    // }

    return routes;
    }, []);
//   }, [hasRole, isAuthenticated]);

  return (
    <>
      <Routes>
        {availableRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </>
  );
}