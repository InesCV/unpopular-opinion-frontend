import React from "react";
import { Route, Redirect } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

function AnonRoute({ component: Component, isLoggedin, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        // TODO (es una pregunta), aquí redirigimos a Profile mejor, no? (Estaba a Private)
        !isLoggedin ? <Component {...props} /> : <Redirect to="/profile" />
      }
    />
  );
}

export default withAuth(AnonRoute);
