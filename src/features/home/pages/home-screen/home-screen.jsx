import { useEffect } from 'react'
import Sidebar from '../../../../components/layout/sidebar/sidebar'
import Main from '../../../../components/layout/main/main'
import NextProject from '../../components/next-project/next-project'
import MonthlySummary from '../../components/monthly-summary/monthly-summary'
import useBodyClass from '../../../../hooks/useBodyClass'
import homeStyles from './home-screen.module.css'

function HomeScreen(){
  useBodyClass("home")
  return (
  <>
    <Sidebar />
        <NextProject />
      <MonthlySummary />
  </>
  )
}
export default HomeScreen