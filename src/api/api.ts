import axios from 'axios';

const token = 'e26f0b9b-0add-4a71-8a4e-4bd8302d71d5';

const api = axios.create({
  baseURL: 'https://api.thecatapi.com/v1/images/search?limit=20',
  headers: {
    'x-api-key': token,
  },
});

export default api;
