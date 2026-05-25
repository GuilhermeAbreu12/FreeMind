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