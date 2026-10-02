import { authContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute(){
    const { user, loading } = useContext(authContext)
   
    if (loading) {
        console.log('Loading...')
        return <p>Carregando ...</p>
    }

    console.log({
        loading,
        user,
    });
    
    if (user) {
        console.log('retornando...')
        return <Outlet />
    }
    
    return <Navigate to='/' replace />
}
export default PrivateRoute;