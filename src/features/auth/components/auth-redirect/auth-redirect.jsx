{/*
SignUpForm
    <p id='create-new-account'>
        Já&nbsp;tem&nbsp;uma&nbsp;conta?
        {' '} 
        <span>
            <Link to="/login">
                Entre&nbsp;aqui.
            </Link>
        </span>
    </p>
    
LoginForm
    <p id='create-new-account'>
        Não&nbsp;tem&nbsp;uma&nbsp;conta?
        {' '}
        <span>
            <Link to="/signup">
                Crie&nbsp;uma&nbsp;aqui.
            </Link>
        </span>
    </p>

*/}
import { Link } from 'react-router-dom'
import styles from './auth-redirect.module.css'
function AuthRedirect({ id, link, firstText, secondText }){
    return(
    <>
        <p id={id} className={styles.authRedirect}>{firstText} 
             <span>
                <Link to={link}>{secondText}</Link>
            </span>
        </p>
    </>
    );
}
export default AuthRedirect