import { Routes, Route } from 'react-router-dom'

import Auth_Screen from './pages/Auth/AuthScreen'

import './styles/App.css'

function App() {
  return (
    <>
    <Routes>
      <Route path='/*' element={<Auth_Screen />} />
    </Routes>
    </>
  )
}

export default App
