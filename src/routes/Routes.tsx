import { Routes as Switch, Route } from "react-router-dom";

import { Home } from "@/pages/Home";
import { SignIn } from "@/pages/Auth/SignIn";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/auth/signin" element={<SignIn />} />
    </Switch>
  )
}

export { Routes };