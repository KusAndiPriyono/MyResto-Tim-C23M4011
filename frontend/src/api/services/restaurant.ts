// import axios from 'api/axios';
// import type { IdOnlyPayload } from 'types/payload';

// class RestaurantApi {
//   static async getAllRestaurants() {
//     const response = await axios.get<ApiResponse<Restaurant>>(
//       '/api/v1/restaurants'
//     );
//     // console.log(response.data.data.data);
//     return response.data.data.data;
//   }

//   static async getRestaurantById({ id }: IdOnlyPayload) {
//     const response = await axios.get<ApiResponse<Restaurant>>(
//       `/api/v1/restaurants/${id}`
//     );
//     return response.data.data;
//   }

//   static async bookingRestaurant({ id }: IdOnlyPayload) {
//     const response = await axios.post<ApiResponse<Restaurant>>(
//       `/api/v1/bookings/checkout-session/${id}`
//     );
//     return response.data.data;
//   }
// }

// export default RestaurantApi;
