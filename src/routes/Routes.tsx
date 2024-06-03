import { Routes as Switch, Route, BrowserRouter } from "react-router-dom";

import { Home } from "@/pages/Home";
import { SignIn, SignUp } from "@/pages/Auth";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="*" element={<Home />} />
      </Switch>
    </BrowserRouter>
  )
}

export { Routes };