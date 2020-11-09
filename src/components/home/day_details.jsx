import React from 'react';

import BlankSlate from './blank_slate'

const DayDetails = () => {
  const date = new Date();
  const date_options = { weekday: 'long', month: 'long', day: 'numeric' };
  const today = date.toLocaleString('en-EN', date_options).toUpperCase();

  return (
    <div className="day-detail">
      <span className="day-detail__date">{ today }</span>
      <span className="day-detail__day">Today</span>
      <BlankSlate/>
    </div>
  );
};

export default DayDetails;
