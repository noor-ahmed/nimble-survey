import React, { useEffect, useRef } from 'react';

import Slider from 'react-slick';

import testSurvey from 'images/background-black.png';
import slickSettings from 'screens/Home/slickSettings';

const SurveyList = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    window.addEventListener('wheel', (e) => {
      slideList(e.wheelDelta);
    })
  }, []);

  const slideList = (wheel) => {
    wheel > 0 ? (
      sliderRef.current.slickNext()
    ) : (
      sliderRef.current.slickPrev()
    )
  }

  return (
    <div className="survey-list">
      <Slider { ...slickSettings } ref={ sliderRef }>
        <div>
          <img src={ testSurvey } alt="test" className="survey-list__image" />
        </div>
        <div>
          <img src={ testSurvey } alt="test" className="survey-list__image" />
        </div>
        <div>
          <img src={ testSurvey } alt="test" className="survey-list__image" />
        </div>
      </Slider>

      <div className="survey-list__information">
        <div>
          <h3 className="survey-list__title"> Check-In</h3>
          <p className="survey-list__description">
            Description here
          </p>
        </div>
        <div className="survey-list__navigation">
          <button className="button button--circle">
            <span className="survey-list__detail-arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SurveyList;