// This class is for projection of the component
import React from 'react';

import RatingQuestion from 'components/RatingQuestion';
import crossIcon from 'images/icons/cross_icon.png';

export class Question extends React.Component {
  render() {
    const question = 'How fulfilled did you feel during this WFH period?';

    return (
      <div className="question">
        <div className="question__header">
          <div className="question__header-control">
            <button className="button button__close"><img src={ crossIcon } alt="x" /></button>
          </div>
        </div>

        <div className="question__container">
          <div className="question__details">
            <div className="question__number">1/5</div>
            <h1 className="question__title"> { question }</h1>
            <RatingQuestion initialRating={ 1 } ratingCount={ 5 } ratingEmoji="star" />
          </div>
        </div>

        <div className="question__footer">
          <div className="question__footer-right">
            <button className="button button--arrow">
              <span className="question__arrow-right" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
