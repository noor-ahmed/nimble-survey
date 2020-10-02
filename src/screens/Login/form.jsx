import React from 'react';

function Form() {
  return (
    <div className="form">
      <div className="form-group__container">
        <label id="email" htmlFor="email" className="form-group__label">
          Email
        </label>
        <input type="text" name="email" className="form-group__input" />
      </div>

      <div className="form-group">
        <label id="password" htmlFor="password" className="form-group__label">
          Password
        </label>
        <input type="password" name="password" className="form-group__input" />
      </div>

      <div className="footer">
        <button type="button" className="btn button--white">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Form;
