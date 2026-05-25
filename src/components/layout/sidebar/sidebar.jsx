// Importar hooks
import { useState } from 'react';

// Importar componentes
import Logo from '../logo/logo'
import Nav from './nav'

// Importar imagens
import menuImg from '../../../assets/images/logos/sun.png'

// Importar estilos
import styles from './sidebar.module.css'

function Sidebar(){
    const [MenuState, SetMenuState] = useState(false);

    const toggleMenu = () => SetMenuState(MenuState => !MenuState)

    return (<>
        <aside className={`${styles.sidebar} `}>
            <div className={`${styles.menu} ${MenuState ? styles.active : ''}`}>
                <div className={styles.sidebarHead}>
                    <Logo/>
                </div>
                <Nav />
            </div>
            <button className={styles.closeMenu} onClick={toggleMenu}>
                <img className={`${styles.menuIcon} ${MenuState ? styles.active : ''}`} src={menuImg} alt="Botão para fechar o menu" />
            </button>
        </aside>
    </>)
}
export default Sidebar