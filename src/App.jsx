import { Routes, Route } from 'react-router-dom'
import AuthScreen from './features/auth/pages/auth-screen/auth-screen'
import HomeScreen from './features/home/pages/home-screen/home-screen'

import PrivateRoute from './routes/PrivateRoute'

import './styles/App.css'
import NewProjectScreen from './features/projects/pages/new-project-screen'

function App() {

  return (
    <>
      <Routes>
        <Route path='/*' element={<AuthScreen />} />
        <Route path='/home' element={
          <PrivateRoute> 
            <HomeScreen />
          </PrivateRoute>
        } />
        <Route path='/createProject' element={<NewProjectScreen/>}/>
      </Routes>
    </>
  )
}

export default App
