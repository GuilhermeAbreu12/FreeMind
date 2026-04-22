import Items from './items'
import navStyles from './sidebar.module.css'
function Nav(){
    /* Lista de itens que precisam estar na nav */
    const items = ['Clientes', 'Finanças', 'Projetos', 'Cronograma', 'Config. de projetos', 'Config. do Free']

    return (
        <>
        <nav className={navStyles.sidebarNav}>
            <ul className={navStyles.sidebarList}>
                {items.map((item, index) => (
                    <Items key={index} destination='#' content={item}/>
                ))}
            </ul>
        </nav>
        </>
    )
}
export default Nav;