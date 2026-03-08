import PasswordInput from '../PasswordInput'
import { Link } from 'react-router-dom'
import EmailInput from '../EmailInput'

function SignUp(){
    return (<>
        <form>
            <div id="name-container">
                <label htmlFor="name">Nome de usuário</label>
                <input type="text" title='Digite seu nome de usuário'/>                        
            </div>
            <EmailInput/>
            <PasswordInput/>                
            <PasswordInput title="Digite sua senha novamente" label='Repita a senha'/>
            
            <button id='btn-login'>Cadastrar</button>
        </form>
        <p id='create-new-account'>Já&nbsp;tem&nbsp;uma&nbsp;conta?{' '} 
            <span><Link to="/login">Entre&nbsp;aqui.</Link></span>
        </p>
    </>)
}
export default SignUp