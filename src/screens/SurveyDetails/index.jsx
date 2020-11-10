// This class is for projection of the component
import React from 'react';

import RatingQuestion from '../../components/RatingQuestion';

export class Question extends React.Component {
  render() {
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
            <RatingQuestion initialRating={ 1 } ratingCount={ 5 } ratingEmoji="star" />
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
  }
}