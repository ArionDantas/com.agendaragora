import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import './global.css'

import Home from './pages/Home'
import Account from './pages/Account'
import RedeSocial from './pages/Dashboard'
import Search from './pages/Search'
import Domain from './pages/Domain'
import EventNote from './pages/EventNote'


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/account' element={<Account />} />
          <Route path='/dashboard' element={<RedeSocial />} />
          <Route path='/search' element={<Search />} />
          <Route path='/domain' element={<Domain />} />
          <Route path='/event_note' element={<EventNote />} />
        </Routes>
      </Router>
    </>
  )
}

export default App