import styles from './header.module.css'
import accountIcon from '../../../assets/images/icons/account.png'
import bellIcon from '../../../assets/images/icons/bell.png'

function Header(){
    const username = "Programador1234"
    return(
        <>
        <header id={styles.header}>
            <img src={bellIcon} className={styles.icons} alt="Ícone de notificações" />
            <p id={styles.username}>{username}</p>
            <img src={accountIcon} className={styles.icons} alt="Ícone de conta" />
        </header>
        </>
    )
}
export default Header;