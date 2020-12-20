import React from 'react';

import SurveySelectField from 'components/SurveySelectField';
import SurveyTextAreaField from 'components/SurveyTextAreaField';
import SurveyTextField from 'components/SurveyTextField';

const Questions = () => {
  const question = 'How fulfilled did you feel during this WFH period?';
  const options = [
    { name: 'Bangladesh', value: 'BD' },
    { name: 'Thailand', value: 'TH' },
    { name: 'Vietnam', value: 'VN' }
  ];

  return (
    <div className="questions">
      <div className="questions__container">
        <div className="questions__details">
          <div className="questions__number">1/5</div>
          <h1 className="questions__title"> { question }</h1>
          <SurveySelectField options={ options } />
          <SurveyTextAreaField />
          <SurveyTextField />
        </div>
      </div>
    </div>
  );
};

export default Questions;