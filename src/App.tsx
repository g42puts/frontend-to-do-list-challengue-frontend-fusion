import { Fragment } from "react/jsx-runtime";
import { Routes } from "./routes";
import { AuthProvider } from "./contexts/AuthProvider";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </BrowserRouter>
    </Fragment>
  )
}

export default App;
