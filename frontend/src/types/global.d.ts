declare interface ApiResponse<Data = undefined> {
  status: string;
  message: string;
  data: Data;
}

declare interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

declare type token = string;
