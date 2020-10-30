import React from 'react';

function Layout(props) {
  return (
    <div className="background-layout">
      <div
        className="background-layout__image"
        style={{ backgroundImage: `url(${props.backgroundImage})` }}
        aria-label="background-layout-image"
      >
        <div className="background-layout__overlay">{ props.children }</div>
      </div>
    </div>
  );
};

export default Layout;
