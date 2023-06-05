import axios from 'api/axios';
import { LoginPayload, SignupPayload } from 'types/payload';

class AuthApi {
  static async signup(payload: SignupPayload) {
    const response = await axios.post<ApiResponse>(
      '/api/v1/users/signup',
      payload
    );
    return response.data;
  }

  static async login(payload: LoginPayload) {
    const response = await axios.post<ApiResponse<{ token: token }>>(
      '/api/v1/users/login',
      payload
    );
    return response.data;
  }
}

export default AuthApi;
