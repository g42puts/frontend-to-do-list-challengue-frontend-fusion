import axios, { AxiosRequestHeaders, InternalAxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:3000/",
});

function handleRequestAccessToken(config: InternalAxiosRequestConfig<any>) {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
}

api.interceptors.request.use((config) => {
  if (!config.headers) config.headers = {} as AxiosRequestHeaders;
  handleRequestAccessToken(config);

  return config;
});

api.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("accessToken");
    }
    return Promise.reject(error);
  }
);

export { api };
