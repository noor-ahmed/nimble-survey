import axios from 'axios';

const authorization_token = localStorage.getItem('authorization_token');

const api_instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: authorization_token != null ? authorization_token : '',
  },
  responseType: 'json',
});

export default api_instance;