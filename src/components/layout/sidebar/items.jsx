import itemStyles from './sidebar.module.css'
function Items({ destination = '#', content = 'undefined' }){
    return (
        <>
        <li className={itemStyles.sidebarList}>
            <a href={destination} className={itemStyles.sidebarLinks}>
                {content}
            </a>
        </li>
        </>
    )
}
export default Items;