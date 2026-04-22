import icon from '../../../assets/images/logos/logo_full.png'
import logoStyles from './logo.module.css'
function Logo({ className = ''}){
    return (
    <>
        {/* Arrumar esse id, está erradíssimo */}
        <div className={`${logoStyles.logoContainer} ${className}`}>
            <img src={icon} id={logoStyles.logo} alt="logotipo do FreeMind" />
        </div>
    </>
    )
}
export default Logo