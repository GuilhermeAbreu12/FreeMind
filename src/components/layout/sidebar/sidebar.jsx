import Logo from '../logo/logo'
import Nav from './nav'

import menuImg from '../../../assets/images/logos/sun.png'
import { useEffect, useState } from 'react';
// Importar estilos
import styles from './sidebar.module.css'

function Sidebar(){
    const [MenuState, SetMenuState] = useState(false);
    
    const toggleMenu = () => {
        SetMenuState(prev => !prev)
    }

    return (<>
        <aside className={`${styles.sidebar} `}>
            <div className={`${styles.menu} ${MenuState ? styles.active : ''}`}>
                <div className={styles.sidebarHead}>
                    <Logo/>
                </div>
                <Nav />
            </div>
            <Button className={sidebarStyles.closeMenu} onClick={() => SetMenuState(MenuState => !MenuState)}>
            </Button>
                <img className={`${styles.menuIcon} ${MenuState ? styles.active : ''}`} src={menuImg} alt="Botão para fechar o menu" />
        </aside>
    </>
    )
}
export default Sidebar