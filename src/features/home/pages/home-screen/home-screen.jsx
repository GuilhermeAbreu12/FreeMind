// Importar hooks e elementos
import useBodyClass from '../../../../hooks/useBodyClass'

// Importar componentes
import Header from '../../../../components/layout/header/header'
import Sidebar from '../../../../components/layout/sidebar/sidebar'
import Main from '../../../../components/layout/main/main'
import NextProject from '../../components/next-project/next-project'
import MonthlySummary from '../../components/monthly-summary/monthly-summary'

// Importar estilos
import '../../../../styles/App.css'
import mainStyles from '../../../../components/layout/main/main.module.css'
import buttonStyles from '../../../../components/ui/button/button.module.css'
import { Link } from 'react-router-dom'

function HomeScreen(){
  useBodyClass("home")
  return (<>
    <Header />
    <Sidebar />
    <Main className='mainSideBetween'>
      <div className={mainStyles.mainContent}>
        <Link to='/createProject' className={buttonStyles.primaryBtn}>Criar novo projeto</Link>
        <h3 className='sectionTitle'>Projeto mais próximo</h3>
        <NextProject />
      </div>
      <MonthlySummary />
    </Main>
  </>)
}
export default HomeScreen