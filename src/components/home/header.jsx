import React from 'react';

import logo from '../../images/logo_white.pngg';
import userImage from '../../images/default-user-image.jpg';

const Header = () => {
  return (
    <div className="home-header">
      <div className="home-header__logo">
        <img src={ logo } alt="NIMBLE" className="home-header__site-logo" />
      </div>
      <div className="home-header__user-details">
        <img src={ userImage } alt="USER" className="home-header__user-image" />
      </div>
    </div>
  );
};

export default Header;
