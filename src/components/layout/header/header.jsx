import styles from './header.module.css'
import accountIcon from '../../../assets/images/icons/account.png'
import bellIcon from '../../../assets/images/icons/bell.png'
import { useContext, useEffect, useState } from 'react'
import { authContext } from '../../../contexts/AuthContext'
import { logout } from '../../../lib/authService'

function Header(){
    const { username } = useContext(authContext)
    const [ accountOptionsState, setAccountOptionsState] = useState(false)

    const toggleVisibilityAccountOptions = () => {
        if (accountOptionsState){
            setAccountOptionsState(false)
        }
        else {
            setAccountOptionsState(true)
        }
    }

    return(
        <>
        <header id={styles.header}>
            <img src={bellIcon} className={styles.icons} alt="Ícone de notificações" />
            <p id={styles.username}>{username}</p>
            <div>
                <img src={accountIcon} className={styles.icons} onClick={toggleVisibilityAccountOptions} alt="Ícone de conta" />
                <div id={styles.accountOptions} className={accountOptionsState ? `${styles.visible}` : ''}>
                    <ul>
                        <li onClick={logout} id={styles.logoutButton}>logout</li>
                    </ul>
                </div>
            </div>        
        </header>
        </>
    )
}
export default Header;