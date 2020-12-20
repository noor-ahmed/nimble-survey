import React from 'react';

import logo from 'images/logo_white.png';
import userImage from 'images/default-user-image.jpg';

const Header = () => {
  return (
    <div className="app-header">
      <div className="app-header__logo">
        <img src={ logo } alt="NIMBLE" className="app-header__site-logo" />
      </div>
      <div className="app-header__menu">
        <img src={ userImage } alt="USER" className="app-header__user-image" />
      </div>
    </div>
  );
};

export default Header;
