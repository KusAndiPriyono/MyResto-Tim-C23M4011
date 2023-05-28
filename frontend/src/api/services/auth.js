import axios from '../axios';

class AuthApi {
  static async signup(payload) {
    const response = await axios.post('/api/v1/users/signup', payload);
    return response.data;
  }
}

export default AuthApi;
