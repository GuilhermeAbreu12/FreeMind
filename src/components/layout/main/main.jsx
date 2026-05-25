import mainStyles from './main.module.css'

function Main( {children} ){
    return (<>
        <main className={mainStyles.main}>
            {children}
        </main>
    </>);
}
export default Main;