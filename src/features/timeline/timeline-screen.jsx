import Agenda from "../../components/layout/agenda/agenda"
import Header from '../../components/layout/header/header'
import Sidebar from '../../components/layout/sidebar/sidebar'
import Main from '../../components/layout/main/main'
import mainStyles from '../../components/layout/main/main.module.css'
function TimelineScreen(){
    return(<>
        <Header />
        <Sidebar />
        <Main className="mainSideBetween">
            <Agenda />
        </Main>
    </>)
}

export default TimelineScreen