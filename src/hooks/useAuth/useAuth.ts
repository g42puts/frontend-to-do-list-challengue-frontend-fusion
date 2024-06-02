import { useContext } from "react";

import { AuthContext } from "@/contexts/AuthProvider";

const useAuth = () => {
  const { auth } = useContext(AuthContext);

  if (auth) {
    return auth;
  }
};

export { useAuth };
