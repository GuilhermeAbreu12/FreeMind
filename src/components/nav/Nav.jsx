import sun from '../../assets/images/logos/sun.png'
import './nav.css'
function Nav(){
    return (
    <>
        <div id='nav-container'>
            <img src={sun} alt="logotipo do FreeMind" />
            <p>FreeMind</p>
        </div>
    </>
    )
}
export default Nav