import { lazy } from "react";
import { IRoute } from "../types";

const MainFeed = lazy(async () => import("../pages/MainFeed"));


export const PublicRoutes: IRoute[] = [
  {
    path: "/",
    Component: () => <MainFeed />,
  },
  
];