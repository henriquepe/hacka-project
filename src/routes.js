import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './features/login/Login';
import Dashboard from './features/dashboard/Dashboard';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
