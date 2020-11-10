import React, { useEffect, useState } from 'react';

const RatingQuestion = ({ initialRating, ratingCount, ratingEmoji }) => {
  const [rating, setRating] = useState(initialRating);
  const [emoji, setEmoji] = useState('👍🏻');
  const [hover, setHover] = useState(null);
  const thumbElements = [...Array(ratingCount || 5)];

  useEffect(() => {
    switch (ratingEmoji) {
      case 'heart': {
        setEmoji('❤️');

        break;
      }
      case 'smiley': {
        setEmoji('🙂');

        break;
      }
      case 'star': {
        setEmoji('⭐');

        break;
      }
      default: {
        setEmoji('👍🏻');
      }
    }
  }, []);

  return (
    <div className="rating">
      { thumbElements.map((thumb, index) => {
        const ratingValue = index + 1;

        return (
          <label key={ index }>
            <input
              type="radio"
              className="rating__radio"
              value={ ratingValue }
              onClick={ () => setRating(ratingValue) }
            />
            <span
              role="img"
              aria-label="thumbs"
              className={
                ratingValue <= (hover || rating)
                  ? 'rating__thumb rating__thumb--selected'
                  : 'rating__thumb'
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
