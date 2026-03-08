import EmailInput from '../EmailInput'
import PasswordInput from '../../components/PasswordInput'

function FormLogin(){
    return (<>
        <form onSubmit={handleSubmit}>
            <EmailInput/>
            <PasswordInput/>
            <button id='btn-login' type='submit'>Login</button>
        </form>
    </>)
}
export default FormLogin