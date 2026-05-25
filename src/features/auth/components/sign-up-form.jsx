// Importar hooks e funções internas
import { useState } from 'react'
import { createProfile, signUp } from '../../../lib/authService'

// Importar componentes personalizados
import PasswordInput from '../../../components/ui/input/password-input'
import Input from '../../../components/ui/input/input'
import Button from '../../../components/ui/button/button'
import AuthRedirect from './auth-redirect/auth-redirect'

/* Importar estilos */
import styles from '../styles/auth.module.css'

function SignUp(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [username, setUsername] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const LOGIN_FIRST_TEXT = "Já tem uma conta?"
    const LOGIN_SECOND_TEXT = "Entre aqui."
    return (<>
        <form className={styles.authForm}>
            <Input className={inputStyles.authInput} type="text" name="username" label="Nome de usuário" title="Digite seu nome de usuário"/>
            <Input className={inputStyles.authInput} type="email" name="email" label="E-mail" title="Digite um E-mail de acesso"/>

            <PasswordInput className={inputStyles.authInput}/>
            <PasswordInput className={inputStyles.authInput} title="Digite sua senha novamente" label='Repita a senha'/>
    const handleSubmit = async (e) => {
        e.preventDefault()
        const result = await signUp(email, password)
        const userID = result.data.user.id 
        createProfile(userID, username)        
            
            <Button id='btn-signup' className={buttonStyles.authBtn} type="submit">Cadastrar</Button>
        </form>
        <AuthRedirect id="login-account" link="/login" firstText={LOGIN_FIRST_TEXT} secondText={LOGIN_SECOND_TEXT}/>
    </>)
}
export default SignUp