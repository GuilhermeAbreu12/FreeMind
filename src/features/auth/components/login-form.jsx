import Input from '../../../components/ui/input'
import PasswordInput from '../../../components/ui/password-input/password-input'
import { useNavigate } from 'react-router-dom'

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

    return (<>
        <form onSubmit={handleSubmit} className={styles.authForm}>
            <Input className={inputStyles.authInput} type="email" name="email" label="E-mail" title="Digite seu E-mail de acesso"/>
            <PasswordInput className={inputStyles.authInput}/>
        </form>
    </>)
}
export default FormLogin