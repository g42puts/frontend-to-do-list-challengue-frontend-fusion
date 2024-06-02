// import { useAuth } from "@/hooks/useAuth"
import { ComponentType, FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface AuthenticatedProps {
  component: ComponentType;
}

const Authenticated: FC<AuthenticatedProps> = ({ component: Component }) => {
  // const isAuthenticated = useAuth(); // Comentei pq n to recebendo nada ainda
  const navigate = useNavigate();

  const isAuthenticated = true; // se for null no "if" o resultado será falso

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null; // Renderiza nada enquanto redireciona
  }


  return <Component />
}

export { Authenticated };