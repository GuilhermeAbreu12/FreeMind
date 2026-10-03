import Header from '../../../components/layout/header/header'
import SideBar from '../../../components/layout/sidebar/sidebar'
import Main from '../../../components/layout/main/main'
import Button from '../../../components/ui/button/button';
import ModalEditClient from '../components/modal-edit-client';

import { FiEdit3 } from "react-icons/fi";
import { useState } from 'react';

// Importar estilos
import '../../../styles/App.css'
import mainStyles from '../../../components/layout/main/main.module.css'
import tableStyles from '../../../components/layout/table/table.module.css'

import { CLIENTS } from '../../../mocks/projects';

function ClientsScreen(){
    const [ modalStatus, setModalStatus ] = useState(false)
    const [ selectedClient, setSelectedClient ] = useState()

    return(<>
        <Header />
        <SideBar />
        <Main className='mainSideBetween'>
            <div className={mainStyles.nulo}></div>
            <div className={`${mainStyles.mainContent} ${mainStyles.mainContentOneElement}`}>
                <h2 className='sectionTitle'>Seus clientes</h2>
                <div className={tableStyles.tableContainer}>
                    <table className={tableStyles.table}>
                        <thead>
                            <tr className={tableStyles.tr}>
                                <th className={tableStyles.th}>Nome</th>
                                <th className={tableStyles.th}>Tipo</th>
                                <th className={tableStyles.th}>Email</th>
                                <th className={tableStyles.th}>Telefone</th>
                                <th className={tableStyles.th}>Responsável</th>
                                <th className={tableStyles.th}>Nº Projetos</th>
                                <th className={tableStyles.th}>Editar</th>
                            </tr>
                        </thead>
                        <tbody className={tableStyles.tbody}>
                            {CLIENTS.map((client) => (
                                <tr className={tableStyles.tr} tabIndex={0}>
                                    <td className={tableStyles.td}>{client.Name}</td>
                                    <td className={tableStyles.td}>{client.Type}</td>
                                    <td className={tableStyles.td}>{client.Email}</td>
                                    <td className={tableStyles.td}>{client.PhoneNumber}</td>
                                    <td className={tableStyles.td}>{client.ResponsibleName}</td>
                                    <td className={tableStyles.td}>{client.NumberProjects}</td>
                                    <td className={tableStyles.td}>
                                        <Button className={'btnEdit'} 
                                            onClick={() => {
                                                setModalStatus(true),
                                                setSelectedClient(client)
                                            }}>
                                            <FiEdit3 className={tableStyles.btnEditIcon}/>
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {modalStatus && <ModalEditClient client={selectedClient} onClose={() => setModalStatus(false)} />}
                </div>
            </div>

        </Main>
    </>)
}
export default ClientsScreen;