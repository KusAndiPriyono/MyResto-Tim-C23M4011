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

export interface UpdateMePayload {
  name: string;
  email: string;
}

export interface IdOnlyPayload {
  id: string;
}
