import { Link } from 'react-router-dom'
import EmailInput from '../EmailInput'
import PasswordInput from '../../components/PasswordInput'
import { useNavigate } from 'react-router-dom'

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
        <form onSubmit={handleSubmit}>
            <EmailInput/>
            <PasswordInput/>
            <button id='btn-login' type='submit' onClick={Enter}>Login</button>
        </form>
        <p id='create-new-account'>Não&nbsp;tem&nbsp;uma&nbsp;conta?{' '}
            <span>
                <Link to="/signup">Crie&nbsp;uma&nbsp;aqui.</Link>
            </span>
        </p>
    </>)
}
export default FormLogin