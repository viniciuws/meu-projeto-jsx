import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLoggedIn } from '../utils/fake-login';

const PrivateRoute = ({ component: Page, ...props }) => {
  return (
    <Route
      {...props}
      render={routeProps => (
        isLoggedIn()
          ? <Page {...routeProps} />
          : <Redirect 
            to={{
              pathname: "/login",
              state: {
                previousPath: routeProps.location
              }
            }}
            />
      )}
    />
  )
}

export default PrivateRoute;