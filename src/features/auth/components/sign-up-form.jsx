import PasswordInput from '../../../components/ui/password-input/password-input'
import Input from '../../../components/ui/input'
import Button from '../../../components/ui/button/button'
import AuthRedirect from './auth-redirect/auth-redirect'

/* CSS */
import styles from '../styles/auth.module.css'
import inputStyles from '../styles/auth-input.module.css'
import buttonStyles from '../styles/auth-button.module.css'

function SignUp(){
    const LOGIN_FIRST_TEXT = "Já tem uma conta?"
    const LOGIN_SECOND_TEXT = "Entre aqui."
    return (<>
        <form className={styles.authForm}>
            <Input className={inputStyles.authInput} type="text" name="username" label="Nome de usuário" title="Digite seu nome de usuário"/>
            <Input className={inputStyles.authInput} type="email" name="email" label="E-mail" title="Digite um E-mail de acesso"/>

            <PasswordInput className={inputStyles.authInput}/>
            <PasswordInput className={inputStyles.authInput} title="Digite sua senha novamente" label='Repita a senha'/>
            
            <Button id='btn-signup' className={buttonStyles.authBtn} type="submit">Cadastrar</Button>
        </form>
        <AuthRedirect id="login-account" link="/login" firstText={LOGIN_FIRST_TEXT} secondText={LOGIN_SECOND_TEXT}/>
    </>)
}
export default SignUp