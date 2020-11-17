import React from 'react';
import { Redirect } from 'react-router-dom';

import Layout from '../../components/basics/layout';
import Logo from '../../components/basics/logo';
import BackgroundImage from '../../images/background.png';
import Form from './form';
import ApiConnector from './api_connector'

const Login = () => {
  const { handleSubmit, requestSuccess, error } = ApiConnector();

  if (requestSuccess) {
    return <Redirect to={ '/forgot-password' } />;
  }

  return (
    <Layout backgroundImage={ BackgroundImage }>
      <div className="container login-container">
        <div className="content">
          <Logo label={ 'Sign in to Nimble' } />

          <Form onSubmitHandler={ handleSubmit } />
        </div>
      </div>
    </Layout>
  );
};

export default Login;