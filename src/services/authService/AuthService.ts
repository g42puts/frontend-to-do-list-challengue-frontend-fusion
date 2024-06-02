import { api } from "@/api";
import { CreateUser, LoginProps } from "./types";
import { IUser } from "@/contexts/types";
import { IServerResponse } from "@/types";

const AuthService = {
  signIn: async (payload: LoginProps) => {
    const { data } = await api.post<IServerResponse<{ accessToken: string }>>(
      "/auth/signin",
      payload
    );
    return data.data;
  },
  signUp: async (payload: CreateUser) => {
    const { data } = await api.post("/auth/signup", payload);
    return data;
  },
  logout: async () => {
    const { data } = await api.post("/auth/logout");
    return data;
  },
  show: async (): Promise<IUser> => {
    const { data } = await api.get<IServerResponse<IUser>>("/auth/profile");
    return data.data;
  },
  refreshToken: async (): Promise<{ accessToken: string }> => {
    const { data } = await api.post<IServerResponse<{ accessToken: string }>>(
      "/auth/refresh"
    );
    console.log("data do service: ", data);
    return data.data;
  },
};

export { AuthService };
