import React, { useEffect, useState, useContext } from 'react';

import Background from 'components/basics/layout';
import DayDetail from 'components/home/day_detail';
import Header from 'components/home/header';
import Details from 'screens/Home/details';
import { AuthContext } from 'contexts/auth';
import SurveyAdapter from 'adapters/surveyAdapter';
import Loader from 'components/LazyLoader/loader';

const Home = () => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const authContext = useContext(AuthContext);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      await SurveyAdapter.getList(1, authContext.state.authorization_token).then(
        function (response) {
          if (response.status === 200) {
            setResponse(response.data);
            setIsLoading(false);
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Background>
      <div className="container-home">
        <Header />
        <DayDetail />
         <Details surveyResponse={ response } />
      </div>
    </Background>

  );
};

export default Home;
