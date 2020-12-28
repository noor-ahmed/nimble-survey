import axios from 'axios';

const authorizationToken = localStorage.getItem('authorization_token');

const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: authorizationToken != null ? authorizationToken : '',
  },
});

export default apiInstance;
