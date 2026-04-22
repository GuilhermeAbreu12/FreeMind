import PasswordInput from '../../../components/ui/password-input/password-input'
import Button from '../../../components/ui/button/button'

/* CSS */
import styles from '../styles/auth.module.css'
import inputStyles from '../styles/auth-input.module.css'
import buttonStyles from '../styles/auth-button.module.css'

function SignUp(){
    return (<>
        <form className={styles.authForm}>

            <PasswordInput className={inputStyles.authInput}/>
            <PasswordInput className={inputStyles.authInput} title="Digite sua senha novamente" label='Repita a senha'/>
            
            <Button id='btn-signup' className={buttonStyles.authBtn} type="submit">Cadastrar</Button>
        </form>
    </>)
}
export default SignUp