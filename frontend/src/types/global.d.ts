declare interface ApiResponse<Data = undefined> {
  status: string;
  message: string;
  data: Data;
}

declare interface Restaurant {
  id: string;
  name: string;
  price: number;
  description: string;
  imageCover: string;
}

declare interface User {
  data: {
    id: string;
    name: string;
    email: string;
    role: string;
    photo: string;
  };
}

declare type token = string;

// duration: number;
// maxCapacity: number;
// difficulty: string;
// ratingsAverage: number;
// ratingsQuantity: number;
// images: string;
// startLocation: {
//   type: string;
//   coordinates: number[];
//   address: string;
//   description: string;
// };
// locations: {
//   type: string;
//   coordinates: number[];
//   address: string;
//   description: string;
// };
// guides: string;
