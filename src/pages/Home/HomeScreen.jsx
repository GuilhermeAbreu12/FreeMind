import { useEffect } from 'react'
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
  </>
  )
}
export default HomeScreen