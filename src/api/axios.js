import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/v1',
});

export function isAxiosError(error) {
  return axios.isAxiosError(error);
}

export default instance;
