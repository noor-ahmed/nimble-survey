import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Login from 'screens/Login';
import ForgotPassword from 'screens/ForgotPassword';
import LazyLoader from 'components/LazyLoader';
import SurveyList from 'screens/Home/surveyList';
import Home from 'screens/Home';
import SurveyDetail from 'screens/SurveyDetail';

const RouteList = () => {
  return (
    <Switch>
      <Route exact path="/" component={ Login }></Route>
      <Route path="/forgot-password" component={ ForgotPassword }></Route>
      <Route path="/survey/" component={ SurveyList } />
      <Route path="/survey/:surveyId" component={ SurveyDetail } />
      <Route path="/loader" component={ LazyLoader }></Route>
      <Route path="/home" component={ Home }></Route>
    </Switch>
  );
};

export default RouteList;
