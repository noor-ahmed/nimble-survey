import React from 'react';

const BlankSlate = () => {
  return (
    <div className="blank-slate">
      <span role="img" aria-label="sunglass" className="blank-slate__emoji">
        😎
      </span>
      <p className="blank-slate__message">You’ve completed all the survey.</p>
      <p className="blank-slate__message">Take a moment.</p>
    </div>
  );
};

export default BlankSlate;
