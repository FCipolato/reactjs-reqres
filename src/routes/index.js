import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Login from "../pages/login";
import Users from "../pages/users";
import UserEdit from "../pages/userEdit";
import NotFound from "../pages/notFound";

import { isAuthenticated } from "../services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const LoginRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Redirect
          to={{ pathname: "/users", state: { from: props.location } }}
        />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={() => <Redirect to="/login" />} />} />
      <LoginRoute path="/login" exact component={Login} />
      <PrivateRoute path="/users" component={Users} />
      <PrivateRoute path="/user/:id" component={UserEdit} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
