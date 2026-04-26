import { useEffect } from 'react'
import Sidebar from '../../../../components/layout/sidebar/sidebar'
import Main from '../../../../components/layout/main/main'
import mainStyles from '../../../../components/layout/main/main.module.css'
import NextProject from '../../components/next-project/next-project'
import MonthlySummary from '../../components/monthly-summary/monthly-summary'
import Header from '../../../../components/layout/header/header'
import Button from '../../../../components/ui/button/button'
import useBodyClass from '../../../../hooks/useBodyClass'
import homeStyles from './home-screen.module.css'

function HomeScreen(){
  useBodyClass("home")
  return (
  <>
    <Header />
    <Sidebar />
    <Main>
      <div></div>{/* espaço vazio */}
      <div className={mainStyles.mainContent}>
        <Button className={mainStyles.primaryBtn}>Criar novo projeto</Button>
        <h3 className={mainStyles.sectionTitle}>Projeto mais próximo</h3>
        <NextProject />
      </div>
      <MonthlySummary />
    </Main>
  </>
  )
}
export default HomeScreen