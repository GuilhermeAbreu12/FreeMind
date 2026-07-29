import styles from './field.module.css'
function Field({ label, name, fullWidth = false, children }){
    return(
        <div className={`${styles.formField} ${fullWidth ? styles.fullWidth : ''}`}>
            <label htmlFor={name}>{label}</label>
            {children}
        </div>
    )
}

export default Field