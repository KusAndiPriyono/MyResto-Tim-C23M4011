import axios from 'axios';

const restaurant = axios.create({
  baseURL: 'http://localhost:8000/api/v1/restaurants',
});

// export function isAxiosError(error) {
//   return axios.isAxiosError(error);
// }

export default restaurant;
