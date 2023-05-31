declare interface ApiResponse<Data = undefined> {
  status: string;
  message: string;
  data: Data;
}

declare interface User {
  data: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
}

declare type token = string;
