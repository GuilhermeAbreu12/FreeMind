import { Routes, Route } from 'react-router-dom'

import AuthScreen from './features/auth/pages/auth-screen/auth-screen'
import HomeScreen from './features/home/pages/home-screen/home-screen'

import './styles/App.css'

function App() {
  return (
    <>
    <Routes>
      <Route path='/*' element={<AuthScreen />} />
      <Route path='/home' element={<HomeScreen />} />
    </Routes>
    </>
  )
}

export default App
