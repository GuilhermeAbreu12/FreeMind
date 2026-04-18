import { useEffect } from 'react'
import Nav from '../../components/Nav/Nav'
import './HomeScreen.css'

function HomeScreen(){
  useEffect(() => {
    document.body.classList.add('home');
    return () => {
      document.body.classList.remove('home')
    };
  }, []);
  
  return (
  <>
    <Nav />
  </>
  )
}
export default HomeScreen