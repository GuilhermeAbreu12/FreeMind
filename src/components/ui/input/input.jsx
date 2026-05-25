import styles from './input.module.css'
function Input({ type='', className='', name='', title='', label='', value='', autoComplete='text',  onChange }){
    return (<>
        <div id={name+"-container"}>
            <label htmlFor={name}>{label}</label>
            <input className={styles[className]} type={type ? type : "text"} id={name} name={name} title={title} value={value} autoComplete={autoComplete} onChange={onChange} required/>                        
        </div>
    </>)
}
export default Input