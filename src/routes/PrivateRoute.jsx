import { authContext } from "../contexts/AuthContext";
import { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute({ children }){
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
    } else {
        <Navigate to='/' replace />}
}
export default PrivateRoute;