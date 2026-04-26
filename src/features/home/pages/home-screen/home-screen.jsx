import { useEffect } from 'react'
import Sidebar from '../../../../components/layout/sidebar/sidebar'
import Main from '../../../../components/layout/main/main'
import useBodyClass from '../../../../hooks/useBodyClass'
import homeStyles from './home-screen.module.css'

function HomeScreen(){
  useBodyClass("home")
  return (
  <>
    <Sidebar />
  </>
  )
}
export default HomeScreen