import styles from '../../../components/layout/modal/modal.module.css'
import Button from '../../../components/ui/button/button'
import Input from '../../../components/ui/input/input'
import formStyles from '../../../components/layout/form/form.module.css'
import { useState } from 'react'
import Field from '../../../components/ui/field/Field'

function ModalEditClient({ project, onClose }){
    const [projectName, setProjectName ] = useState(project.Name)
    const [clientName, setClientName ] = useState(project.Client)
    const [projectType, setProjectType ] = useState(project.Type)
    const [projectStatus, setProjectStatus ] = useState(project.Status)
    const [projectDeadline, setProjectDeadline ] = useState(project.Deadline)
    const [description, setDescription ] = useState(project.Description)
    return (<>
        <div className={styles.modalOverlay}>
            <div className={`${styles.modal} ${styles.modalEdit}`}>
                <h3>Editar projeto</h3>
                <form className={`${formStyles.defaultForm} ${formStyles.bottomMargin}`}>
                    <Input 
                        label='Nome do projeto' 
                        className='simpleInput'
                        value={projectName}
                        onChange={(e) => {setProjectName(e.target.value)}} />
                    <Input 
                        label='Nome do cliente' 
                        className='simpleInput' 
                        value={clientName}
                        onChange={(e) => {setClientName(e.target.value)}} />
                    <Field label='Tipo de projeto' name='projectType'>
                        <select name='projectType' value={projectType} onChange={(e) => {setProjectType(e.target.value)}} required>
                            <option value='pessoa-fisica'>Pessoa física</option>
                            <option value='pessoa-juridica'>Pessoa jurídica</option>
                        </select>
                    </Field>
                    {/*<Input 
                        label='Tipo do projeto'
                        className='simpleInput'
                        value={projectType}
                        onChange={(e) => {setProjectType(e.target.value)}} /> */}
                    <Field label='Status do projeto' name='projectStatus'>
                        <select name="projectStatus" value={projectStatus} onChange={(e) => {setProjectStatus(e.target.value)}} required>
                            <option value='site-institucional'>Site institucional</option>
                            <option value='e-commerce'>E-commerce</option>
                            <option value='sistema-web'>Sistema web</option>
                            <option value='app-mobile'>App mobile</option>
                            <option value='landing-page'>Landing page</option>
                            <option value='manutencao'>Manutenção</option>
                            <option value='outro'>Outro</option>
                        </select>
                    </Field>

                    {/*<Input 
                        label='Status do projeto'
                        className='simpleInput'
                        value={projectStatus}
                        onChange={(e) => {setProjectStatus(e.target.value)}} /> */}
                    <Input 
                        label='Prazo final'
                        type='date'
                        className='simpleInput'
                        value={projectDeadline}
                        onChange={(e) => {setProjectDeadline(e.target.value)}} />
                    <Input
                        label='Descrição do projeto'
                        className='simpleInput'
                        value={description}
                        onChange={(e) => {setDescription(e.target.value)}} />
                    
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
