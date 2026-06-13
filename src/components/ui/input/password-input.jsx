import { useState } from 'react'
import { WiDayCloudyWindy, WiDaySunny } from 'react-icons/wi'
import styles from './input.module.css'

function PasswordInput({ title, className = '', id='', label='', autoComplete='text', value = '', onChange }){
    const [showPassword, setShowPassword] = useState(false)
    const toggleShowPassword = () => setShowPassword(!showPassword)
    
    return (<>
        <div id="passwordContainer">
            <label htmlFor={id}>{label ? label : 'Senha'}</label>
            <div className={styles.passwordContainer__area}>
                <input name='password' id={id} className={styles[className]} onChange={onChange} value={value} autoComplete={autoComplete} type={showPassword ? 'text' : 'password'} title={title ? title : "Digite uma senha de acesso"} required/>
                <button className={styles.showPasswordBtn} type='button' onClick={toggleShowPassword}>
                    {showPassword ? <WiDayCloudyWindy/> : <WiDaySunny/>}
                </button>
            </div>
        </div>
    </>)
}
export default PasswordInput