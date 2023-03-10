
import { Routes, Route } from 'react-router'
import './App.css'
import Contact from './views/Contact'
import Home from './views/Home'
import Project from './views/Project'
import Technologies from './views/Technologies'

function App (): JSX.Element {
  return (
<>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/proyectos' element={<Project/>}/>
  <Route path='/tecnologias' element={<Technologies/>}/>
  <Route path='/contact' element={<Contact/>}/>

</Routes>
</>
  )
}

export default App
