import React from 'react';
import logo from '../../images/logo_white.png';

const Logo = ({ label }) => {
  return (
    <div className="logo-base">
      <img src={logo} alt="NIMBLE" className="logo-base__img" />
      <p className="logo-base__label">{ label }</p>
    </div>
  );
};

export default Logo;
