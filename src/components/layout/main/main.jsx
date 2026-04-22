import mainStyles from './main.module.css'
import Button from '../../ui/button/button'
function Main(){
    return (
    <>
        <main className={mainStyles.main}>
            <Button className={mainStyles.primaryBtn}>Criar novo projeto</Button>
            <section id='next-project'>

            </section>
        </main>
    </>
    );
}
export default Main;