import React from 'react';

import ThumbRating from 'components/Rating';

const Questions = () => {
  const question = 'How fulfilled did you feel during this WFH period?';

  return (
    <div className="questions">
      <div className="questions__header">
        <div className="questions__header-right">
          <button className="button button--close">x</button>
        </div>
      </div>

      <div className="questions__container">
        <div className="questions__details">
          <div className="questions__number">1/5</div>
          <h1 className="questions__title"> { question }</h1>
          <ThumbRating initialRating={ 3 } ratingCount={ 5 } ratingEmoji="smiley" />
        </div>
      </div>

      <div className="questions__footer">
        <div className="questions__footer-right">
          <button className="button button--arrow">
            <span className="questions__arrow-right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Questions;
