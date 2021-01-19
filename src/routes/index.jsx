import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { Login } from 'screens/Login';
import { ForgotPassword } from 'screens/ForgotPassword';
import { Home } from 'screens/Home';
import { Question } from 'screens/SurveyDetails';

const RouteList = () => {
  return (
    <Switch>
      <Route exact path="/" component={ Login }></Route>
      <Route path="/forgot-password" component={ ForgotPassword }></Route>
      <Route path="/home" component={ Home }></Route>
      <Route path="/question" component={ Question }></Route>

    </Switch>
  );
};

export default RouteList;
