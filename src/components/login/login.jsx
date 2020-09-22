import React from 'react';

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container">
        <div className="header">Login</div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email"></input>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password"></input>
            </div>

            <div className="footer">
              <button type="button" className="btn">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
