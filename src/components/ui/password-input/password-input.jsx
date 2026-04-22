import { useState } from 'react'
import { WiDayCloudyWindy, WiDaySunny } from 'react-icons/wi'
import styles from './password-input.module.css'

function PasswordInput({ title, className, label }){
    const [showPassword, setShowPassword] = useState(false)

    function toggleShowPassword(){
        setShowPassword(!showPassword)
    }
    return (
    <>
        <div id="password-container">
            <label htmlFor="password">{label ? label : 'Senha'}</label>
            <div className={styles.passwordContainer__area}>
                <input name='password' className={className} type={showPassword ? 'password' : 'text'} title={title ? title : "Digite uma senha de acesso"}/>
                <button className={styles.showPasswordBtn} type='button' onClick={toggleShowPassword}>{showPassword ? <WiDayCloudyWindy/> : <WiDaySunny/>}</button>
            </div>
        </div>
    </>
    )
}
export default PasswordInput