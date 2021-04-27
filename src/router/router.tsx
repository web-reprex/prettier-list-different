import { Suspense, useState } from 'react';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import Routes from './routes';
import { RoleAccessLevel } from '../types/auth';
import { Route } from '../types/router';
import ErrorBoundary from './guards/ErrorBoundary';
import PrivateRoute from './guards/PrivateRoute';
import PublicRoute from './guards/PublicRoute';
import Loader from '../views/components/Loader/Loader';

const routeGenerator = (routes: Route[], isLoggedIn: boolean) =>
  routes.map((route: Route, index) => {
    const { component, ...rest } = route;
    return route.meta.requiredLevel <= RoleAccessLevel.User ? (
      <PrivateRoute
        component={component}
        isLoggedIn={isLoggedIn}
        {...rest}
        key={index}
      />
    ) : (
      <PublicRoute
        component={component}
        isLoggedIn={isLoggedIn}
        restricted={true}
        {...rest}
        key={index}
      />
    );
  });

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
        <Router>
          <Switch>
            {routeGenerator(Routes, isLoggedIn)}
            <Redirect exact from="/" to="/dashboard" />
          </Switch>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
};

export default AppRouter;
