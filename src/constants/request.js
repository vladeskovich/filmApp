import * as axios from 'axios';
import API_KEY from './api';

const request = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
});

export default request;
