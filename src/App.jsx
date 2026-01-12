import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";

import "./App.css";

function App() {
  const { isAuthenticated, isLoading, error } = useAuth0();

  if (isLoading) {
    return <div className="cargando">
      Cargando...
    </div>;
  }

  if (error) {
    console.log(error);
    return <div className="error">
      Error en la autenticación.
    </div>;
  }

  return <div className="contenedor">
    <h1>Aplicacion Autenticacion</h1>
    {isAuthenticated ? <>
      <p>Sesion iniciada</p> <Profile /> <LogoutButton /> </> :
      <>
        <p>Sesion no iniciada</p> <LoginButton /> </>}
  </div>
}

export default App;