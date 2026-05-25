import { authContext } from "../contexts/AuthContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PrivateRoute({ children }){
    const { user, loading } = useContext(authContext)
    const navigate = useNavigate()
    
    useEffect(() => {
        if (user) {
            console.log('Tem user')
        } else {
            console.log('Não tinha user')
            navigate("/")
        }

    }, [user])

    if (loading) {
        console.log('Loading...')
        return <p>Carregando ...</p>
    } 
    return children
}
export default PrivateRoute;