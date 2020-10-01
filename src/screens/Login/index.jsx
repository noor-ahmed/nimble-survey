import React from 'react';
import Layout from '../../components/basics/layout';
import Logo from '../../components/basics/logo';
import BackgroundImage from '../../images/background.png';
import Form from './form';

export class Login extends React.Component {
  render() {
    return (
      <Layout backgroundImage={BackgroundImage}>
        <div className="container login-container">
          <div className="content">
            <Logo label={'Sign in to Nimble'} />
            <Form />
          </div>
        </div>
      </Layout>
    );
  }
}
