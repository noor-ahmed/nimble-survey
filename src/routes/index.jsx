import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { Login } from '../screens/Login';
import { ForgotPassword } from '../screens/ForgotPassword'
import LazyLoader from '../components/LazyLoader'
import { Home } from '../screens/Home'

const RouteList = () => {
  return (
    <Switch>
      <Route exact path="/" component={ Login }></Route>
      <Route path="/forgot-password" component={ ForgotPassword }></Route>
      <Route path="/loader" component={ LazyLoader }></Route>
      <Route path="/home" component={ Home }></Route>
    </Switch>
  );
};

export default RouteList;
