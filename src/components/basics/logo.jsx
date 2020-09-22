import React from 'react';
import logo from '../../images/logo_white.png';

const Logo = ({ label }) => {
  console.log(logo);

  return (
    <div className="row basic-logo">
      <img src={logo} alt="NIMBLE" className="logo-basic__img" />
      <p className="logo-auth__label">{label}</p>
    </div>
  );
};

export default Logo;
