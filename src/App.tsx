import { Fragment } from "react/jsx-runtime";
import { Routes } from "./routes";
import { AuthProvider } from "./contexts/AuthProvider";

function App() {
  return (
    <Fragment>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Fragment>
  )
}

export default App;
