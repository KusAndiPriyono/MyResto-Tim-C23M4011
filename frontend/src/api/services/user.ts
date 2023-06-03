import axios from 'api/axios';

class UserApi {
  static async getAuthenticatedUser() {
    const response = await axios.get<ApiResponse<User>>('/api/v1/users/me');
    return response.data.data;
  }

  static async updateAuthenticatedUser(data: User) {
    const response = await axios.patch<ApiResponse<User>>(
      '/api/v1/users/updateMe',
      data
    );
    return response.data.data;
  }
}

export default UserApi;
