import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const Navbar = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <nav className="navbar">
            {/* LADO IZQUIERDO */}
            <div className="nav-left">
                <a href="#">Inicio</a>
                <a href="#">Menú</a>
                <a href="#">Productos</a>
            </div>

            {/* LADO DERECHO */}
            <div className="nav-right">
                {isAuthenticated ? <LogoutButton /> : <LoginButton />}
            </div>
        </nav>
    );
};

export default Navbar;