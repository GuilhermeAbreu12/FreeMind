import Header from "../../../components/layout/header/header";
import Sidebar from "../../../components/layout/sidebar/sidebar";
import Main from "../../../components/layout/main/main";
import Field from "../../../components/ui/field/Field";

import { PROJECTS } from "../../../mocks/projects";

import { Link } from 'react-router-dom'
import { FiEdit3 } from "react-icons/fi";
import { useState } from "react";
import '../../../styles/App.css'
import mainStyles from '../../../components/layout/main/main.module.css'
import buttonStyles from '../../../components/ui/button/button.module.css'
import tableStyles from '../../../components/layout/table/table.module.css'

function ProjectsScreen(){
    return(<>
        <Header />
        <Sidebar />
        <Main className="mainSideBetween">
            <div className={`${mainStyles.mainContent} ${mainStyles.mainContentOneElement}`}>
                <Link to='/createProject' className={buttonStyles.primaryBtn}>Criar novo projeto</Link>
                <h2 className="sectionTitle">Seus projetos</h2>
                <div className={tableStyles.tableContainer}>
                    <table className={tableStyles.table}>
                        <thead>
                            <tr className={tableStyles.tr}>
                                <th className={tableStyles.th}>Nome</th>
                                <th className={tableStyles.th}>Cliente</th>
                                <th className={tableStyles.th}>Tipo</th>
                                <th className={tableStyles.th}>Status</th>
                                <th className={tableStyles.th}>Prazo final</th>
                                <th className={tableStyles.th}>Descrição</th>
                                <th className={tableStyles.th}>Editar</th>
                            </tr>
                        </thead>
                        <tbody className={tableStyles.tbody}>
                            {PROJECTS.map((project) => (
                                <tr className={tableStyles.tr} tabIndex={0}>
                                    <td className={tableStyles.td}>{project.Name}</td>
                                    <td className={tableStyles.td}>{project.Client}</td>
                                    <td className={tableStyles.td}>{project.Type}</td>
                                    <td className={tableStyles.td}>{project.Status}</td>
                                    <td className={tableStyles.td}>{project.Deadline}</td>
                                    <td className={tableStyles.td}>
                                        <Field name='projectDescription'>
                                            <textarea name="projectDescription" rows='1' value={project.Description} disabled  />
                                        </Field>
                                    </td>
                                    <td className={tableStyles.td}>
                                        <Button className={'btnEdit'} 
                                            onClick={() => {
                                                setModalStatus(true), 
                                                setSelectedProject(project)
                                            }}>
                                            <FiEdit3 className={tableStyles.btnEditIcon}/>
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>       
        </Main>
    </>);
}
export default ProjectsScreen