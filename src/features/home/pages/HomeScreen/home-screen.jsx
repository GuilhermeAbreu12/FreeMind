import { useEffect } from 'react'
import Sidebar from '../../../../components/layout/sidebar/sidebar'
import Main from '../../../../components/layout/main/main'
import homeStyles from './home-screen.module.css'

function HomeScreen(){
  return (
  <>
    <Sidebar />
    <Main />
  </>
  )
}
export default HomeScreen