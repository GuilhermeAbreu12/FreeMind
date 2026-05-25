// Importando funções internas
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

// Importando componentes
import Logo from '../../../../components/layout/logo/logo'
import LoginForm from "../../components/login-form"
import SignUpForm from '../../components/sign-up-form'
import useBodyClass from '../../../../hooks/useBodyClass'

// Importando o CSS
import styles from './auth-screen.module.css'
import logoStyles from '../../../../components/layout/logo/logo.module.css'
import { useEffect } from 'react'

function Auth_Screen(){
    const location = useLocation()

    let isLoginPage = location.pathname === '/login'
    if (!isLoginPage) isLoginPage = location.pathname === '/' 

    useBodyClass('auth')


    return (<>
        <Logo className={logoStyles.auth}/>
        <section className={styles.formSection}>
            <div className={styles.leftSide}>
                <p>Bem-vindo de volta.</p>
                <h2 className={styles.authName}>{isLoginPage ? 'Entrar' : 'Criar conta'}</h2>
            </div>
            <div className={styles.rightSide}>
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