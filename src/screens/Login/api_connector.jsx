import { useContext, useState } from 'react';

import Api from 'utils/Api';

const ApiConnector = () => {
  const [requestSuccess, setRequestSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (values) => {
    try {
      await Api.post('api/v1/oauth/token', {
        grant_type: 'password',
        email: values.email,
        password: values.password,
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET,
      })
        .then(function (response) {
          if (response.status === 200) {
            setRequestSuccess(true);

            return response.data;
          }
        })
    } catch (error) {
      if (error.response.status === 400) {
        setError('Invalid email or password');
      } else {
        setError('Something went wrong. Please try again!');
      }
    }
  };

  return {
    handleSubmit,
    requestSuccess,
    error,
  };
};

export default ApiConnector;
