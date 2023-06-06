import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/v1/';

export const DataGet = async (endPoint) => {
  try {
    const res = await axios({
      url: API_URL + endPoint,
      method: 'get',
      responseType: 'json',
    });
    return {
      status: res.status,
      message: res.message,
      data: res.data.data.data,
    };
  } catch (err) {
    return {
      status: err.response.status,
      message: err.message,
      data: null,
    };
  }
};
