import { useState } from 'react'
import { WiDayCloudyWindy, WiDaySunny } from 'react-icons/wi'

function PasswordInput({ title, className, label }){
    const [showPassword, setShowPassword] = useState(false)

    function toggleShowPassword(){
        setShowPassword(!showPassword)
    }
    return (
    <>
        <div id="password-container">
            <label htmlFor="password">{label ? label : 'Senha'}</label>
                <input name='password' className={className} type={showPassword ? 'password' : 'text'} title={title ? title : "Digite uma senha de acesso"}/>
            </div>
        </div>
    </>
    )
}
export default PasswordInput