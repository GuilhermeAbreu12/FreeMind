import styles from './sidebar.module.css'
function Items({ destination = '#', children }){
    return (<>
        <li className={styles.sidebarList}>
            <a href={destination} className={styles.sidebarLinks}>
                {children}
            </a>
        </li>
    </>)
}
export default Items;