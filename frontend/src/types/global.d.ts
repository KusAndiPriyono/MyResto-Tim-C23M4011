declare interface ApiResponse<Data = undefined> {
  status: string;
  message: string;
  data: Data;
}

declare interface Restaurant {
  data: {
    name: string;
    booking: string;
    difficulty: string;
    id: string;
    duration: string;
    summary: string;

    maxCapacity: number;
    price: number;
    ratingsAverage: number;
    ratingsQuantity: number;
  };
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
