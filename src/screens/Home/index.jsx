import React from 'react';

import Background from 'components/basics/layout';
import DayDetail from 'components/home/day_detail';
import Header from 'components/home/header';
import SurveyList from 'screens/Home/surveyList';

export class Home extends React.Component {
  render() {
    return (
      <Background>
        <div className="container-home">
          <Header />
          <DayDetail />
          <SurveyList />
        </div>
      </Background>
    );
  }
}

export default Home;
