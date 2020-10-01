import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { Login } from '../screens/Login';

const RouteList = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login}></Route>
    </Switch>
  );
};

export default RouteList;