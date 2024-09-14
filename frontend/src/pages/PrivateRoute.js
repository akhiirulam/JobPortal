import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

// isAuthenticated function to check if the user has a valid token
const isAuthenticated = () => {
  const token = Cookies.get('token');
  return !!token;
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" /> 
        )
      }
    />
  );
};

export default PrivateRoute;
