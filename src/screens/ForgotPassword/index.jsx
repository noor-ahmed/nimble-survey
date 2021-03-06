import React from 'react';

import Alert from '../../components/basics/alert'
import Form from './form';
import Logo from '../../components/basics/logo';
import BackgroundImage from '../../images/background.png';
import Layout from '../../components/basics/layout'

export class ForgotPassword extends React.Component {
  render() {
    return (
      <Layout backgroundImage={ BackgroundImage }>
        <div className="container forgot-password-container">
          <div className="content">
            <Logo label={ 'Enter your email to receive instructions for resetting your password.' } />
            <Alert
              title="Check your email."
              description="We've emailed you instruction to reset your password."
            />
            <Form/>
          </div>
        </div>
      </Layout>
    );
  }
}

export default ForgotPassword;
