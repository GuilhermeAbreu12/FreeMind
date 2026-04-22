import Input from '../../../components/ui/input'
import PasswordInput from '../../../components/ui/password-input/password-input'
import { useNavigate } from 'react-router-dom'
import Button from '../../../components/ui/button/button'
import AuthRedirect from './auth-redirect/auth-redirect'

/* CSS */
import styles from '../styles/auth.module.css'
import inputStyles from '../styles/auth-input.module.css'
import buttonStyles from '../styles/auth-button.module.css'

function FormLogin(){
    const navigate = useNavigate()
    function handleSubmit(e){
        e.preventDefault()
        console.log('Foi enviado')
    }
    function Enter(){
        navigate('/home')
    }
    const LOGIN_FIRST_TEXT = "Não tem uma conta?"
    const LOGIN_SECOND_TEXT = "Crie uma aqui."

    return (<>
        <form onSubmit={handleSubmit} className={styles.authForm}>
            <Input className={inputStyles.authInput} type="email" name="email" label="E-mail" title="Digite seu E-mail de acesso"/>
            <PasswordInput className={inputStyles.authInput}/>
            <Button id='btn-login' className={buttonStyles.authBtn} type="submit" onClick={Enter}>Login</Button>
        </form>
        <AuthRedirect id="signup-account" link="/signup" firstText={LOGIN_FIRST_TEXT} secondText={LOGIN_SECOND_TEXT} />
    </>)
}
export default FormLogin