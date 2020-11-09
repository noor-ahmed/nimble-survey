import React from 'react';

const DayDetails = () => {
  const date = new Date();
  const date_options = { weekday: 'long', month: 'long', day: 'numeric' };
  const today = date.toLocaleString('en-EN', date_options).toUpperCase();

  return (
    <div className="day-detail">
      <span className="today__date">{ today }</span>
      <span className="today__day">Today</span>
    </div>
  );
};

export default DayDetails;
