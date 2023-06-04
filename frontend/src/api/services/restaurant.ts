import axios from 'api/axios';
import type { IdOnlyPayload } from 'types/payload';

class RestaurantApi {
  static async getAllRestaurants() {
    const response = await axios.get<ApiResponse<Restaurant>>(
      '/api/v1/restaurants'
    );
    return response.data.data;
  }

  static async getRestaurantById({ id }: IdOnlyPayload) {
    const response = await axios.get<ApiResponse<Restaurant>>(
      `/api/v1/restaurants/${id}`
    );
    return response.data.data;
  }
}

export default RestaurantApi;
