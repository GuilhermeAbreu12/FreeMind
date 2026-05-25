import styles from './button.module.css'
function Button({id, className, type, onClick, children}){
    return(<>
        <button id={id} className={styles[className]} type={type ? type : 'button'} onClick={onClick}>
            {children}
        </button>
    </>)
}
export default Button;