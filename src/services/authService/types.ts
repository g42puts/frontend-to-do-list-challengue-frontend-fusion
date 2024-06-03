export interface LoginProps {
  username: string;
  password: string;
}

export interface CreateUser {
  email: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  accessToken?: string;
}
