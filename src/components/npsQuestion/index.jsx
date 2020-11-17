import React, { useState } from 'react';

const NpsQuestion = ({ init, final }) => {
  const [hover, setHover] = useState(null);
  const initScore = init || 1;
  const finalScore = final || 10;
  const [nps, setNps] = useState(Math.round(finalScore/2));
  const scoreElements = Array.from({ length: finalScore }, (v, k) => k + initScore);

  return (
    <div className="np-score">
      <div className="np-score__number-container">
        { scoreElements.map((score, index) => {
          const ratingValue = index + 1;

          return (
            <label
              key={ index }
              className={
                ratingValue === scoreElements.length
                  ? 'np-score__number-label np-score__number-label--no-border'
                  : 'np-score__number-label'
              }
            >
              <input
                type="radio"
                className="np-score__radio"
                value={ score }
                onClick={ () => setNps(score) }
              />

              <p
                className={
                  ratingValue <= (hover || nps)
                    ? 'np-score__number np-score__number--selected'
                    : 'np-score__number'
                }
                onMouseEnter={ () => setHover(score) }
                onMouseLeave={ () => setHover(null) }
              >
                { score }
              </p>
            </label>
          );
        }) }
        <div className="np-score__identifier">
          <div className="np-score__low-score">
            <p>Not at all Likely</p>
          </div>
          <div className="np-score__high-score">
            <p>Extremely Likely</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NpsQuestion;