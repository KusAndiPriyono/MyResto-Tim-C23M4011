import axios from 'api/axios';
import { UpdateMePayload } from 'types/payload';

class UserApi {
  static async getAuthenticatedUser() {
    if (localStorage.getItem('token')) {
      const response = await axios.get<ApiResponse<User>>('/api/v1/users/me');
      return response.data.data;
    }
    return null;
  }

  static async getUpdateAuthenticatedUser(data: UpdateMePayload) {
    const response = await axios.patch<ApiResponse<User>>(
      '/api/v1/users/updateMe',
      data
    );
    return response.data.data;
  }
}

export default UserApi;
