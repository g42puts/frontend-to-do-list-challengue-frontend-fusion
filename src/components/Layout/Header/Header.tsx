import { useAuth } from "@/hooks";
import { AuthService } from "@/services";
import { useCallback } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const auth = useAuth();

  const logout = useCallback(() => {
    AuthService.logout()
      .then(() => {
        localStorage.removeItem("accessToken")
        window.location.href = "/";
      })
      .catch((err) => {
        console.log('Erro ao realizar logout: ', err);
      })
      ;
  }, [])

  return (
    <div className="flex flex-row gap-20">
      <span>{auth ? 'Você está logado' : 'Você está deslogado'}</span>
      <nav>
        {!auth
          ? (
            <>
              <Link to="/auth/signin">Sign In</Link>
              <Link to="/auth/signup">Sign Up</Link>
            </>
          ) : (
            <button onClick={logout}>Fazer Logout</button>
          )
        }

      </nav>
    </div>
  )
}

export { Header };