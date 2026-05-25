import { useEffect } from 'react'
import Sidebar from '../../../../components/layout/sidebar/sidebar'
import Main from '../../../../components/layout/main/main'
import mainStyles from '../../../../components/layout/main/main.module.css'
import NextProject from '../../components/next-project/next-project'
import MonthlySummary from '../../components/monthly-summary/monthly-summary'
import Header from '../../../../components/layout/header/header'
import useBodyClass from '../../../../hooks/useBodyClass'
import homeStyles from './home-screen.module.css'
import { Link } from 'react-router-dom'

function HomeScreen(){
  useBodyClass("home")
  return (<>
    <Header />
    <Sidebar />
    <Main>
      <div></div>{/* espaço vazio */}
      <div className={mainStyles.mainContent}>
        <Link to='/createProject' className={buttonStyles.primaryBtn}>Criar novo projeto</Link>
        <h3 className={mainStyles.sectionTitle}>Projeto mais próximo</h3>
        <NextProject />
      </div>
      <MonthlySummary />
    </Main>
  </>)
}
export default HomeScreen