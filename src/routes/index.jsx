import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { Login } from '../screens/Login';
import { ForgotPassword } from '../screens/ForgotPassword'

const RouteList = () => {
  return (
    <Switch>
      <Route exact path="/" component={ Login }></Route>
      <Route path="/forgot-password" component={ ForgotPassword }></Route>
    </Switch>
  );
};

export default RouteList;
