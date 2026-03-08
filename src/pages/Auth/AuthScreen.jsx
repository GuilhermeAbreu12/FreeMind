import { useLocation } from 'react-router-dom'
import Nav from '../../components/nav/Nav'
    const location = useLocation()
    const isLoginPage = location.pathname === '/login' 
        <Nav/>
                <h2>{isLoginPage ? 'Entrar' : 'Criar conta'}</h2>
