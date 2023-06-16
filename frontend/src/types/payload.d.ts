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
  photo: File | null;
}

export interface IdOnlyPayload {
  id: string;
}
