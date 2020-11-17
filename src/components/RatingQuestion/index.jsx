import React, { useState } from 'react';

const RatingQuestion = ({ initialRating, ratingCount, ratingEmoji }) => {
  const [rating, setRating] = useState(initialRating);
  const [emoji] = useState(initEmoji);
  const [hover, setHover] = useState(null);
  const emojiElement = [...Array(ratingCount || 5)];

  function initEmoji(ratingEmoji) {
    switch(ratingEmoji) {
      case 'heart':
        return '❤️';
      case 'smiley':
        return '🙂';
      case 'star':
        return '⭐';
      default:
        return '👍🏻';
    }
  }

  return (
    <div className="rating">
      { emojiElement.map((thumb, index) => {
        const ratingValue = index + 1;

        return (
          <label key={ index }>
            <input className="rating__radio" value={ ratingValue } onClick={ () => setRating(ratingValue) }/>
            <span
              role="img"
              aria-label="thumbs"
              className={
                ratingValue <= (hover || rating)
                  ? 'rating__emoji rating__emoji--selected'
                  : 'rating__emoji'
              }
              onMouseEnter={ () => setHover(ratingValue) }
              onMouseLeave={ () => setHover(null) }
            >
              { emoji }
            </span>
          </label>
        );
      }) }
    </div>
  );
};

export default RatingQuestion;
