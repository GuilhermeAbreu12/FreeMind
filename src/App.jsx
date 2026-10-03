import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './routes/PrivateRoute'

import './styles/App.css'

import AuthScreen from './features/auth/pages/auth-screen/auth-screen'
import HomeScreen from './features/home/pages/home-screen/home-screen'
import ProjectsScreen from './features/projects/pages/projects-screen'
import NewProjectScreen from './features/projects/pages/new-project-screen'
import ClientsScreen from './features/clients/pages/clients-screen'
import TimelineScreen from './features/timeline/timeline-screen'

function App() {

  return (
    <>
      <Routes>
        <Route path='/*' element={<AuthScreen />} />
        
        <Route element={<PrivateRoute />}>
          <Route path='/home' element={<HomeScreen />} />
          <Route path='/projects' element={<ProjectsScreen />} />
          <Route path='/createProject' element={<NewProjectScreen />} />
          <Route path='/clients' element={<ClientsScreen />} />
          <Route path='/timeline' element={<TimelineScreen />} />
        </Route>
      
      </Routes>
    </>
  )
}

export default App
