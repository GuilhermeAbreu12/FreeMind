import Items from './items'
import styles from './sidebar.module.css'

function Nav(){
    /* Lista de itens que precisam estar na nav */
    const items = ['Clientes', 'Finanças', 'Projetos', 'Cronograma', 'Config. de projetos', 'Config. do Free']

    return (<>
        <nav className={styles.sidebarNav}>
            <ul className={styles.sidebarList}>
                {items.map((item, index) => (
                    <Items key={index} destination='#' content={item}/>
                ))}
            </ul>
        </nav>
    </>)
}
export default Nav;