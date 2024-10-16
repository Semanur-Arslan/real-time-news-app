import axios from 'axios';

const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
const baseUrl = 'https://newsapi.org/v2';

const API = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json'
  }
});

API.interceptors.request.use(config => {
  config.params = {
    ...config.params,
    apiKey: apiKey,
  };

  return config;
});

export default API;
