import mainStyles from './main.module.css'

function Main( {className = '', children} ){
    return (<>
        <main className={`${mainStyles.main} ${mainStyles[className]}`}>
            {children}
        </main>
    </>);
}
export default Main;