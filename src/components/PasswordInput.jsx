import { useState } from 'react'
import { WiDayCloudyWindy, WiDaySunny } from 'react-icons/wi'

function PasswordInput({ title, label }){
    const [showPassword, setShowPassword] = useState(false)

    function toggleShowPassword(){
        setShowPassword(!showPassword)
    }
    return (
    <>
        <div id="password-container">
            <label htmlFor="password">{label ? label : 'Senha'}</label>
            <div id="password-container__area">
                <input id='password-input' type={showPassword ? 'password' : 'text'} title={title ? title : "Digite uma senha de acesso"}/>
                <button id='show-password-btn' type='button' onClick={toggleShowPassword}>{showPassword ? <WiDayCloudyWindy/> : <WiDaySunny/>}</button>
            </div>
        </div>
    </>
    )
}
export default PasswordInput