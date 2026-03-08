import PasswordInput from '../../components/PasswordInput'
function FormLogin(){
    return (<>
        <form onSubmit={handleSubmit}>
            <PasswordInput/>
        </form>
    </>)
}
export default FormLogin