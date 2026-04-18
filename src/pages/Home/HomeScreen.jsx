import { useEffect } from 'react'
import Nav from '../../components/Nav/Nav'
import Main from '../../components/MainHome/MainHome'
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
    <Main />
  </>
  )
}
export default HomeScreen