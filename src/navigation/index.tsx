import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { LoadingScreen } from "../pages/Loading";

const WelcomeScreen = lazy(() => import("../pages/Welcome"));
const LoginScreen = lazy(() => import("../pages/Login"));
const BrowseScreen = lazy(() => import("../pages/Browse"));

export const Navigation = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingScreen />}>
        <Switch>
          <Route exact path="/">
            <WelcomeScreen />
          </Route>
          <Route exact path="/login">
            <LoginScreen />
          </Route>
          <Route exact path="/browse">
            <BrowseScreen />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};
