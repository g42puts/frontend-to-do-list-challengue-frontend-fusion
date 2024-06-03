import { useCallback } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "@/hooks";
import { AuthService } from "@/services";
import { Button } from "@/components/Forms/Button";

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
      });
  }, [])

  return (
    <nav className="flex flex-row justify-between items-center max-w-[1140px] m-auto gap-10 h-16 px-5 text-white">
      <div className="flex flex-row">
        <Button className="bg-transparent hover:bg-gray-700"><Link to="/">Homepage</Link></Button>
      </div>
      <div className="flex flex-row justify-center items-center gap-2">
        {!auth
          ? (
            <>
              <Button className="bg-green-500 hover:grayscale-[25%]"><Link to="/auth/signin">Sign In</Link></Button>
              <Button className="bg-blue-500 hover:grayscale-[25%]"><Link to="/auth/signup">Sign Up</Link></Button>
            </>
          ) : (
            <>
              <span>{auth ? `Bem vindo, ${auth.firstName}!` : 'Você está deslogado'}</span>
              <Button className="bg-transparent border-blue-500" onClick={logout}>Fazer Logout</Button>
            </>
          )
        }
      </div>
    </nav>
  )
}

export { Header };