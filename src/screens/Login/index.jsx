import React from 'react';
import { Redirect } from 'react-router-dom';

import Layout from 'components/basics/layout';
import Logo from 'components/basics/logo';
import BackgroundImage from 'images/background.png';
import LoginForm from 'screens/Login/loginForm';
import Handler from 'screens/Login/handler';

const Login = () => {
  const { handleSubmit, requestSuccess } = Handler();

  if (requestSuccess) {
    return <Redirect to={ '/home' } />;
  }

  return (
    <Layout backgroundImage={ BackgroundImage }>
      <div className="container login-container">
        <div className="content">
          <Logo label={ 'Sign in to Nimble' } />

          <LoginForm onSubmitHandler={ handleSubmit } />
        </div>
      </div>
    </Layout>
  );
};

export default Login;
