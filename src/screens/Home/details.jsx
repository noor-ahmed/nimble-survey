import React, { useContext } from 'react';

import PageBackground from 'components/basics/layout';
import { BackgroundContext } from 'contexts/background';
import BlankSlate from 'components/home/blank_slate';
import Header from 'components/home/header';
import SurveyList from 'screens/Home/surveyList';

// eslint-disable-next-line react/prop-types
const Details = ({ surveyResponse }) => {
  const backgroundContext = useContext(BackgroundContext);

  const date = new Date();
  const date_options = { weekday: 'long', month: 'long', day: 'numeric' };
  const today = date.toLocaleString('en-EN', date_options).toUpperCase();

  return (
    <PageBackground
      type="image"
      imagePath={ backgroundContext.state.currentBackground }
    >
      <div className="home">
        <Header />
        <div className="home__detail">
          <p className="home__date">{ today }</p>
          <h1 className="home__day">Today</h1>
          { surveyResponse.meta.records === 0 ? (
            <BlankSlate />
          ) : (
            <SurveyList surveyResponse={ surveyResponse } />
          ) }
        </div>
      </div>
    </PageBackground>
  );
};

export default Details;