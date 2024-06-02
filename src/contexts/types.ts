export interface IAuth {
  id: string;
  username: string;
}

export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  created_at: string;
}

export interface IAuthContext {
  auth: IUser | null;
  loading: boolean;
  getProfile: () => void;
}
