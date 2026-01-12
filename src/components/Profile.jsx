import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
     console.log("USER AUTH0:", user);
    if (!isAuthenticated || !user) {
        return null;
    }
    return <div className="perfil">
        {user.picture && (
            <img 
            src={user.picture}
            alt={user.name} 
            className="foto"/>
            )}
        <div className="info">
            <p className="nombre">{user.name}</p>
            <p className="email">{user.email}</p>
        </div>
    </div>
}

export default Profile;