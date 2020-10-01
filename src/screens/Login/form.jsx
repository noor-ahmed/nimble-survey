import React from 'react';

function Form() {
  return (
    <form className="form">
      <div className="form-group__container">
        <label for="email" className="form-group__label">
          Email
        </label>
        <input type="text" id='email' name="email" className="form-group__input" />
      </div>

      <div className="form-group">
        <label for="password" className="form-group__label">
          Password
        </label>
        <div>
          <input type="password" id="password" name="password" className="form-group__input" />
          <a href="/forgot-password" className="form-group__forgot-password">
            Forgot?
          </a>
        </div>
      </div>

      <div className="footer">
        <button type="submit" className="btn submit button--white">
          Sign in
        </button>
      </div>
    </form>
  );
};

export default Form;