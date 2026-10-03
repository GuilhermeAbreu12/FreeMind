import Items from './items'
import styles from './sidebar.module.css'

function Nav(){
    /* Lista de itens que precisam estar na nav */
    const items = [
        {nome: 'Início', link: '/home'},
        {nome: 'Clientes', link: '/clients'},
        {nome: 'Finanças', link: '#'}, 
        {nome: 'Projetos', link: '/projects'}, 
        {nome: 'Cronograma', link: '/timeline'}, 
        {nome: 'Config. de projetos', link: '#'}, 
        {nome: 'Config. do Free', link: '#'}
    ]

    return (<>
        <nav className={styles.sidebarNav}>
            <ul className={styles.sidebarList}>
                {items.map((item, index) => (
                    <Items key={index} destination={item.link}>{item.nome}</Items>
                ))}
            </ul>
        </nav>
    </>)
}
export default Nav;