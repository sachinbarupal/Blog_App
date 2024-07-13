import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { RootErrorBoundary } from "./RootErrorBoundary";
import appRoutes from "./appRoutes";

import { Signin } from "../pages/Signin";
import { Signup } from "../pages/Signup";
import { Blog } from "../pages/Blog";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<RootErrorBoundary />}>
      <Route path="/" element={<div>Root</div>} />
      <Route path={appRoutes.signup} element={<Signup />} />
      <Route path={appRoutes.signin} element={<Signin />} />
      <Route path={appRoutes.blog} element={<Blog />} />
    </Route>
  )
);
