import EmailInput from '../EmailInput'
import PasswordInput from '../../components/PasswordInput'

function FormLogin(){
    return (<>
        <form onSubmit={handleSubmit}>
            <EmailInput/>
            <PasswordInput/>
        </form>
    </>)
}
export default FormLogin