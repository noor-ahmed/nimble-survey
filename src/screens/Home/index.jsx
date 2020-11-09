import React from 'react';

import Background from '../../components/basics/layout';
import DayDetails from '../../components/home/day_details';
import Header from '../../components/home/header';

export class Home extends React.Component {
  render() {
    return (
      <Background>
        <div className="container-home">
          <Header/>
          <DayDetails/>
        </div>
      </Background>
    );
  }
}

export default Home;
