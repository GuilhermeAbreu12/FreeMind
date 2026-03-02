import './formLogin.css'
function FormLogin(){
    const btnLogin = document.querySelector('#btn-login')
    return (
        <>
        <form action="">
            <h2>Login</h2>
            <label htmlFor="email">E-mail</label>
            <input type="email" />
            <label htmlFor="password">Password</label>
            <input type="password" />
            <button id='btn-login'>Login</button>
        </form>
        </>
    )
}
export default FormLogin