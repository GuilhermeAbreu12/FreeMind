function Nav(){
    return (
        <>
        <aside id='aside-menu'>
            <nav className='menu'>
                <div id="nav-head">
                    <Logo/>
                </div>
                <div id="nav-body">
                    <ul id='nav-body-ul'>
                        <li><a href="#">Clientes</a></li>
                        <li><a href="#">Finanças</a></li>
                        <li><a href="#">Projetos</a></li>
                        <li><a href="#">Cronograma</a></li>
                        <li><a href="#">Config. de projeto</a></li>
                        <li><a href="#">Config. do Free</a></li>
                    </ul>
                </div>
            </nav>
            <button id='close-menu' onClick={() => SetMenuState(MenuState => !MenuState)}>
                <img id='menu-icon' src={IconeMenu} alt="Botão para fechar o menu" />
            </button>
        </aside>
        </>
    )
}
export default Nav