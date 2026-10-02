import styles from '../../../components/layout/modal/modal.module.css'
import Button from '../../../components/ui/button/button'
import Input from '../../../components/ui/input/input'
import { useState } from 'react'

function ModalEditClient({ client, onClose }){
    const [clientName, setClientName ] = useState(client.Name)
    const [email, setEmail ] = useState(client.Email)
    const [clientType, setClientType ] = useState(client.Type)
    const [responsibleName, setResponsibleName ] = useState(client.ResponsibleName)
    return (<>
        <div className={styles.modalOverlay}>
            <div className={`${styles.modal} ${styles.modalEdit}`}>
                <h3>Editar cliente</h3>
                <form className={`${formStyles.defaultForm} ${formStyles.bottomMargin}`}>
                    <Input 
                        label='Nome do cliente' 
                        className='simpleInput'
                        value={clientName}
                        onChange={(e) => {setClientName(e.target.value)}} />
                    <Input 
                        label='Tipo de cliente' 
                        className='simpleInput' 
                        value={clientType}
                        onChange={(e) => {setClientType(e.target.value)}} />
                    <Input 
                        label='E-mail principal'
                        className='simpleInput'
                        value={email}
                        onChange={(e) => {setEmail(e.target.value)}} />
                    <Input
                        label='Responsável'
                        className='simpleInput'
                        value={responsibleName}
                        onChange={(e) => {setResponsibleName(e.target.value)}} />
                    <div className={styles.containerBtn}>
                        <Button className={'secondaryBtn'} onClick={onClose}>Fechar</Button>
                        <Button className={'primaryBtn'}>Salvar</Button>
                    </div>
                </form>
            </div>
        </div>
    </>)
    
}
export default ModalEditClient