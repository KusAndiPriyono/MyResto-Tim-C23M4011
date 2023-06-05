import axios, { AxiosError } from 'axios';

export default axios.create({
  baseURL: 'http://127.0.0.1:8000',
});

export function isAxiosError<ResponseType>(
  error: unknown
): error is AxiosError<ResponseType> {
  return axios.isAxiosError(error);
}
