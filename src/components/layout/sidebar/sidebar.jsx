import Logo from '../logo/logo'
import Nav from './nav'
import Button from '../../ui/button/button'
{/*import CloseMenu from './CloseMenu' Não sei o que é isso. */}

import sidebarStyles from './sidebar.module.css'
import menuImg from '../../../assets/images/logos/sun.png'
import { useEffect, useState } from 'react';

function Sidebar(){
    const [MenuState, SetMenuState] = useState(false);
    
    const toggleMenu = () => {
        SetMenuState(prev => !prev)
    }

    return (
    <>
    {/* Tentando usar CSS modules */}
        <aside className={`${sidebarStyles.sidebar} `}>
            <div className={`${sidebarStyles.menu} ${MenuState ? sidebarStyles.active : ''}`}>
                <div className={sidebarStyles.sidebarHead}>
                    <Logo/>
                </div>
                <Nav />
            </div>
            <Button className={sidebarStyles.closeMenu} onClick={() => SetMenuState(MenuState => !MenuState)}>
                <img className={`${sidebarStyles.menuIcon} ${MenuState ? sidebarStyles.active : ''}`} src={menuImg} alt="Botão para fechar o menu" />
            </Button>
        </aside>
    </>
    )
}
export default Sidebar