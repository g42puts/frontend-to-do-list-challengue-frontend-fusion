import { createContext, ReactNode, useState, useCallback, useEffect } from "react";

import { AuthService } from "@/services";
import { IAuthContext, IUser } from "./types";

const AuthContext = createContext({} as IAuthContext);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(
    !!window.localStorage.getItem("accessToken")
  );
  const [auth, setAuth] = useState<IUser | null>(null)

  // Get User Profile
  const getProfile = useCallback(() => {
    const accessToken = window.localStorage.getItem("accessToken");

    if (accessToken) {
      setLoading(true);
      AuthService.show()
        .then((data) => {
          setAuth(data);
        })
        .catch(() => {
          setAuth(null);
        })
        .finally(() => setLoading(false));
    } else {
      setAuth(null);
      setLoading(false);
    }
  }, []);

  const refreshToken = useCallback(() => {
    const accessToken = window.localStorage.getItem("accessToken");

    if (accessToken) {
      setLoading(true);
      AuthService.refreshToken()
        .then((data) => window.localStorage.setItem("accessToken", data.accessToken))
        .catch(() => {
          setAuth(null);
          window.localStorage.removeItem("accessToken");
        })
        .finally(() => setLoading(false));
    }
  }, [])


  useEffect(() => {
    const fourMinutes = 1000 * 60 * 5;
    const interval = setInterval(() => {
      { refreshToken() }
    }, fourMinutes);

    setLoading(false);

    return () => clearInterval(interval);
  }, [auth, loading, refreshToken]);

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  return (
    <AuthContext.Provider value={{ auth, loading, getProfile }}>
      {children}
    </AuthContext.Provider>
  )
}


export { AuthContext, AuthProvider };