import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Mobile from './components/Mobile'
import Product from './components/Product'
import Notfound from './components/Notfound'

function App() {
  return (
    <Router>
     <Navbar/>
     <Routes>
      <Route path='/' Component={Home} />
      <Route path='/about' Component={About} />
      <Route path='/contact' Component={Contact} />
      <Route path='/mobile' Component={Mobile} />
      <Route path='/product' Component={Product} />
      <Route path='*' Component={Notfound} />
     </Routes>

    </Router>
  )
}

export default App