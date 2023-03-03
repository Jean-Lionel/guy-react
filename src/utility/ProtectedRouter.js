import React from "react";
import { Redirect, Route } from "react-router-dom";
import useGetConnectedUser from "./useGetConnectedUser";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("token");
    const { userConnected } = useGetConnectedUser();
    // Todo Get Data access for the best Route
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default ProtectedRoute;