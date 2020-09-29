import React from 'react';
import Logo from '../basics/logo';
import Layout from '../basics/layout';
import BackgroundImage from '../../images/background.png';
import Form from './form'

export class Login extends React.Component {
  render() {
    return (
      <Layout backgroundImage={BackgroundImage}>
        <div className="login-container">
          <div className="content">
            <Logo label={'Sign in to Nimble'} />
            <Form />
          </div>
        </div>
      </Layout>
    );
  }
}
