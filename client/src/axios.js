import axios from 'axios';

// Create an Axios instance
const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000',  // Default to localhost, but will use docker container name in prod
    headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
