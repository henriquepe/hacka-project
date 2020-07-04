import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Motor1 from './pages/motors/Motor1';
import Motor2 from './pages/motors/Motor2';
import Motor3 from './pages/motors/Motor3';
import Motor4 from './pages/motors/Motor4';

import Login from './features/login/Login';
import Dashboard from './features/dashboard/Dashboard';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/motor1" component={Motor1} />
        <Route path="/motor2" component={Motor2} />
        <Route path="/motor3" component={Motor3} />
        <Route path="/motor4" component={Motor4} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
