import React from 'react';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const Loader = () => {
  const themeColor = '#313236';
  const highlightColor = '#49494D';

  return (
    <SkeletonTheme color={ themeColor } highlightColor={ highlightColor }>
      <div className="skeleton-header">
        <span className="skeleton-header__menu-bar">
          <Skeleton />
        </span>
      </div>

      <div className="container skeleton-details">
        <span className="skeleton-details__date">
          <Skeleton />
        </span>
        <span className="skeleton-details__day">
          <Skeleton />
        </span>
        <span className="skeleton-details__survey-img">
          <Skeleton />
        </span>
        <span className="skeleton-details__survey-title">
          <Skeleton />
        </span>
        <span className="skeleton-details__survey-desc">
          <Skeleton />
        </span>
        <span className="skeleton-details__navigation">
          <Skeleton />
        </span>
      </div>
    </SkeletonTheme>
  );
};

export default Loader;
