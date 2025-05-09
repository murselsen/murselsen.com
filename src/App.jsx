import React from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'


// Pages
import Home from './pages/Home/Home'
import About from './pages/About/About'
// Components
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div id='app'>
      <header>
        <Header />
      </header>
      <main>
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/projects" element={<AppProjects />} /> */}
            {/* <Route path="/contact" element={<AppContact />} /> */}
          </Routes>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
