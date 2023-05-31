export interface SignupPayload {
  name: string;
  email: string;
  password: string;
  passwordConfirm?: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}
