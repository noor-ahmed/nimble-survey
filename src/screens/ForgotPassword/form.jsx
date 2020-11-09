import React from 'react';

function Form() {
  return(
    <form className="form">
      <div className="form-group">
        <label htmlFor="email" className="form-group__label">
          Email
        </label>
        <input type="text" id='email' name="email" className="form-group__input"/>
      </div>

      <div className="footer">
        <button type="submit" className="btn submit button--white">
          Send Recovery Email
        </button>
      </div>
    </form>
  );
}

export default Form;
