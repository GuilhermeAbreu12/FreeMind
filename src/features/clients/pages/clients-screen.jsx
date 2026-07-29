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

function ClientsScreen(){
    const [ modalStatus, setModalStatus ] = useState(false)
    return(<>
        <Header />
        <SideBar />
        <Main className='mainSideBetween'>
            <div className={mainStyles.mainContent}>
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
                            <tr className={tableStyles.tr} tabIndex={0}>
                                <td className={tableStyles.td}>PetZ</td>
                                <td className={tableStyles.td}>Jurídica</td>
                                <td className={tableStyles.td}>contato@petz.com.br</td>
                                <td className={tableStyles.td}>(14) 99999-9999</td>
                                <td className={tableStyles.td}>Geraldo Alberto</td>
                                <td className={tableStyles.td}>1</td>
                                <td className={tableStyles.td}>
                                    <Button className={'btnEdit'} onClick={(e) => setModalStatus(true)}>
                                        <FiEdit3 className={tableStyles.btnEditIcon}/>
                                    </Button>
                                </td>
                            </tr>
                            <tr className={tableStyles.tr} tabIndex={0}>
                                <td className={tableStyles.td}>Thiago Silva.ltda</td>
                                <td className={tableStyles.td}>Jurídica</td>
                                <td className={tableStyles.td}>contato@thiago.com.br</td>
                                <td className={tableStyles.td}>(230) 9888-8888</td>
                                <td className={tableStyles.td}>Thiago Silva</td>
                                <td className={tableStyles.td}>2</td>
                                <td className={tableStyles.td}>
                                    <Button className={'btnEdit'} onClick={(e) => setModalStatus(true)}>
                                        <FiEdit3 className={tableStyles.btnEditIcon}/>
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    {modalStatus && <ModalEditClient onClose={(e) => setModalStatus(false)} />}
                </div>
            </div>

        </Main>
    </>)
}
export default ClientsScreen;