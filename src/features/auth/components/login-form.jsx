import Input from '../../../components/ui/input'
import PasswordInput from '../../../components/ui/password-input/password-input'
// Importar hooks
import { useEffect, useState } from 'react'
import { useContext } from 'react'

// Importar funções
import { getProfile, signIn } from '../../../lib/authService'
import { authContext } from '../../../contexts/AuthContext'

import Button from '../../../components/ui/button/button'
import AuthRedirect from './auth-redirect/auth-redirect'

/* CSS */
import styles from '../styles/auth.module.css'
import inputStyles from '../styles/auth-input.module.css'
import buttonStyles from '../styles/auth-button.module.css'

function FormLogin(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLoggingIn, setIsLoggingIn] = useState(false)
        
    const { user } = useContext(authContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('Foi enviado')
    }
        // Tenta fazer login.
        const resultSignIn = await signIn(email, password)
    }
    const LOGIN_FIRST_TEXT = "Não tem uma conta?"
    const LOGIN_SECOND_TEXT = "Crie uma aqui."

    return (<>
        <form onSubmit={handleSubmit} className={styles.authForm}>
            <Input className={inputStyles.authInput} type="email" name="email" label="E-mail" title="Digite seu E-mail de acesso"/>
            <PasswordInput className={inputStyles.authInput}/>
        </form>
        <AuthRedirect id="signup-account" link="/signup" firstText={LOGIN_FIRST_TEXT} secondText={LOGIN_SECOND_TEXT} />
    </>)
}
export default FormLogin