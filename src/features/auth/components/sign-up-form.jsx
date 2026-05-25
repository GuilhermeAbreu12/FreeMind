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

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (password !== passwordConfirm) {
            setError('As senhas não coincidem.')
            return
        }

        setError('')
        setLoading(true)

        console.log('sent email: ', email)
        console.log('sent password: ', password)

        const result = await signUp(email, password)
        setLoading(false)
        if (result.error) {
            if (result.error.status === 429) {
                setError('Limite de envio de e-mail atingido. Aguarde alguns minutos e tente novamente.')
            } else {
                setError(result.error.message)
            }
            return
        }

        if (!result.data?.user?.id) {
            setError('Não foi possível criar o usuário. Tente novamente mais tarde.')
            return
        }

        setError(null)
        console.log('Usuário cadastrado:', result.data)
        console.log("Novo email: ",result.data.user.email)
        
        const userID = result.data.user.id 
        createProfile(userID, username)        
    }
    return (<>
        <form onSubmit={handleSubmit} className={styles.authForm}>
            <Input onChange={(e) => setUsername(e.target.value)} className={'authInput'} type="text" name="username" autoComplete='name' label="Nome de usuário" title="Digite seu nome de usuário" value={username}/>
            <Input onChange={(e) => setEmail(e.target.value)} className={'authInput'} type="email" name="email" label="E-mail" autoComplete='email' title="Digite um E-mail de acesso" value={email}/>
            <PasswordInput onChange={(e) => setPassword(e.target.value)} className={'authInput'} value={password} autoComplete='new-password' id='enter_password'/>
            <PasswordInput onChange={(e) => setPasswordConfirm(e.target.value)} className={'authInput'} title="Digite sua senha novamente" label='Repita a senha' value={passwordConfirm} autoComplete='current-password' id='retype_password'/>
            
            <Button id='btn-signup' className={'authBtn'} type="submit" disabled={loading}>
                {loading ? 'Cadastrando...' : 'Cadastrar'}
            </Button>
            {error && <p className={styles.authError}>{error}</p>}
        </form>
        <AuthRedirect id="login-account" link="/login" firstText={LOGIN_FIRST_TEXT} secondText={LOGIN_SECOND_TEXT}/>
    </>)
}
export default SignUp