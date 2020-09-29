import React from 'react';

function Form() {
  return (
    <div className="form">
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="text" name="email"></input>
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" name="password"></input>
      </div>

      <div className="footer">
        <button type="button" className="btn">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Form;
