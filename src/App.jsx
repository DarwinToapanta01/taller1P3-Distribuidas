import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import "./App.css";

function App() {
  const { isAuthenticated, isLoading, error } = useAuth0();

  if (isLoading) {
    return <div className="cargando">Cargando...</div>;
  }

  if (error) {
    return <div className="error">Error en la autenticación</div>;
  }

  return (
    <>
      <Navbar />

      <div className="contenedor">
        <h1>Aplicación Autenticación</h1>

        {isAuthenticated ? (
          <>
            <p>Sesión iniciada</p>
            <Profile />
          </>
        ) : (
          <p>Sesión no iniciada</p>
        )}
      </div>
    </>
  );
}

export default App;