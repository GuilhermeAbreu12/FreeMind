import icon from '../../assets/images/logos/logo_full.png'
import './logo.css'
function Logo(){
    return (
    <>
        <div id='nav-container'>
            <img src={icon} id='logo' alt="logotipo do FreeMind" />
        </div>
    </>
    )
}
export default Logo