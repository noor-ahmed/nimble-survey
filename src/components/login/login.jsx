import React from 'react';
import Logo from '../basics/logo';
import Layout from '../basics/layout';
import BackgroundImage from '../../images/background.png';

export class Login extends React.Component {
  render() {
    return (
      <Layout backgroundImage={BackgroundImage}>
        <div className="login-container">
          <div className="content">
            <Logo label={'logoLabel'} />

            <div className="form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" placeholder="email"></input>
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                ></input>
              </div>

              <div className="footer">
                <button type="button" className="btn">
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
