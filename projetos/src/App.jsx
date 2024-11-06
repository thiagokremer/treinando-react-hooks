import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Contador from './pages/Contador'
import BoaVindas from './pages/BoasVindas'
import Relogio from './pages/Relogio'
import GeradorGatos from './pages/GeradorGatos'
import Posts from './pages/Posts'

const App = () => {

  return (
    <>
      <Router>
        <nav>
          <ul>
            <li> <Link to='/'>BoasVindas</Link> </li>
            <li> <Link to='/contador'>Contador</Link> </li>
            <li> <Link to='/relogio'>Relogio</Link> </li>
            <li> <Link to='/gerador-gatos'>Gerador de Gatos</Link> </li>
            <li> <Link to='/posts'>Posts</Link> </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<BoaVindas/>} />
          <Route path='/relogio' element={<Relogio/>} />
          <Route path='/contador' element={<Contador/>} />
          <Route path='/gerador-gatos' element={<GeradorGatos/>} />
          <Route path='/posts' element={<Posts/>} />
        </Routes>
      </Router>
    </>  
  )
}

export default App
