import { lazy } from "react";
import { IRoute } from "../types";

const MainFeed = lazy(async () => import("../pages/MainFeed"));
const Test = lazy(async () => import("../pages/test"));


export const PublicRoutes: IRoute[] = [
  {
    path: "/",
    Component: () => <MainFeed />,
  },
  {
    path: "/test",
    Component: () => <Test />,
  },
  
];