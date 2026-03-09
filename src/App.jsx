import { Routes, Route } from 'react-router-dom'

import AuthScreen from './pages/Auth/AuthScreen'
import HomeScreen from './pages/Home/HomeScreen'

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
