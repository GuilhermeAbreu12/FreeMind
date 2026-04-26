import mainStyles from './main.module.css'
import Button from '../../ui/button/button'
function Main( {children} ){
    return (
    <>
        <main className={mainStyles.main}>
            {children}
        </main>
    </>
    );
}
export default Main;