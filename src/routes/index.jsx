import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { Login } from 'screens/Login';
import { ForgotPassword } from 'screens/ForgotPassword'
import LazyLoader from 'components/LazyLoader'
import SurveyDetail from 'screens/Home/surveyList';

const RouteList = () => {
  return (
    <Switch>
      <Route exact path="/" component={ Login }></Route>
      <Route path="/forgot-password" component={ ForgotPassword }></Route>
      <Route path="/survey/" component={ SurveyDetail } />
      <Route path="/loader" component={ LazyLoader }></Route>
    </Switch>
  );
};

export default RouteList;
