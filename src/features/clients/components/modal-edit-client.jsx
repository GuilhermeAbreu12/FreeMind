import styles from '../styles/modal-edit-client.module.css'
import Button from '../../../components/ui/button/button'
import Input from '../../../components/ui/input/input'

function ModalEditClient({ onClose }){
    return (<>
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <h3>Editar cliente</h3>
                <form>
                    <Input label='Nome do cliente' className='inputNewProject' />
                    <br />
                    <Input label='E-mail principal' className='inputNewProject' />
                    <br />
                    <Input label='Tipo de cliente' className='inputNewProject' />
                </form>
                <Button className={'primaryBtn'} onClick={onClose}>Fechar</Button>
            </div>
        </div>
    </>)
    
}
export default ModalEditClient