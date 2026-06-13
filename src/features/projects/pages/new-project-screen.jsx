import Header from "../../../components/layout/header/header";
import Main from "../../../components/layout/main/main";
import Sidebar from "../../../components/layout/sidebar/sidebar";
import NewProjectForm from '../components/new-project-form'

function NewProjectScreen(){
    return(<>
        <Header/>
        <Sidebar/>
        <Main>
            <NewProjectForm />
        </Main>
    </>)
}
export default NewProjectScreen;