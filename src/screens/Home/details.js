import React, { useContext } from 'react';

import { BackgroundContext } from 'contexts/background';
import SurveyList from 'screens/Home/surveyList';

const Details = ({ surveyResponse }) => {
  return (
    <div className="home">
      <div className="home__detail">
        <SurveyList surveyResponse={ surveyResponse } />
      </div>
    </div>
  );
};

export default Details;
