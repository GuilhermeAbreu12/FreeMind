// Importando funções internas
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

// Importando componentes
import Nav from '../../components/nav/Nav'
import LoginForm from "../../components/FormLogin/LoginForm"
import SignUpForm from '../../components/FormSignUp/SignUpForm'
// Importando o CSS
import './Auth.css'
import { useEffect } from 'react'

function Auth_Screen(){
    const location = useLocation()

    let isLoginPage = location.pathname === '/login'
    if (!isLoginPage) isLoginPage = location.pathname === '/' 
    
    useEffect(() => {
        document.body.classList.add('auth');
        const nav = document.querySelector('#nav-container');
        nav.classList.add('auth')
        return () => {
            document.body.classList.remove('auth');
            nav.classList.remove('auth')
        };
    }, []);

    return (<>
        <Nav/>
        <section id='form-section'>
            <div id="left-side">
                <p>Bem-vindo de volta.</p>
                <h2>{isLoginPage ? 'Entrar' : 'Criar conta'}</h2>
            </div>
            <div id="right-side">
                <Routes>
                    <Route index element={<LoginForm />} />
                    <Route path='login' element={<LoginForm />} />
                    <Route path='signup' element={<SignUpForm />} />
                </Routes>
            </div>
        </section>
    </>)
}
export default Auth_Screen