// Importando funções internas
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

// Importando componentes
import Logo from '../../../../components/layout/logo/logo'
import LoginForm from "../../components/login-form"
import SignUpForm from '../../components/sign-up-form'
import useBodyClass from '../../../../hooks/useBodyClass'

// Importando o CSS
import { useEffect } from 'react'

function Auth_Screen(){
    const location = useLocation()

    let isLoginPage = location.pathname === '/login'
    if (!isLoginPage) isLoginPage = location.pathname === '/' 

    useBodyClass('auth')

    {/*
    useEffect(() => {   
        const logo = document.querySelector('#logo-container');
        logo.classList.add('auth')
        return () => {
            logo.classList.remove('auth')
        };
    }, []); */}

    return (<>
                <p>Bem-vindo de volta.</p>
            </div>
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