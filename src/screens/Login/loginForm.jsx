import React from 'react';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const LoginForm = ({ onSubmitHandler }) => {
  const initialValues = {
    email: '',
    password: ''
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  });

  return (
    <Formik
      initialValues={ initialValues }
      validationSchema={ validationSchema }
      onSubmit={ onSubmitHandler }
      validateOnChange={ false }
      validateOnBlur={ false }
      className="row"
    >
      { ({ errors, isSubmitting }) => (
        <Form className="form">
          <div className="form-group__container">
            <label htmlFor="email" className="form-group__label">
              Email
            </label>
            <Field type="email" id='email' name="email" className="form-group__input"/>
          </div>
          { errors.email && <p className="validation-error">{ errors.email }</p> }

          <div className="form-group">
            <label htmlFor="password" className="form-group__label">
              Password
            </label>
            <div>
              <Field type="password" id="password" name="password" className="form-group__input"/>
              <a href="/forgot-password" className="form-group__forgot-password">
                Forgot?
              </a>
            </div>
          </div>
          { errors.password && <p className="validation-error">{ errors.password }</p> }

          <div className="footer">
            <button type="submit" className="btn submit button--white" disabled={ isSubmitting }>
              Sign in
            </button>
          </div>
        </Form>
      ) }
    </Formik>
  );
};

export default LoginForm;
