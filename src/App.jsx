import React from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'


// Pages
import Home from './pages/Home/Home'
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
            {/* <Route path="/about" element={<AppAbout />} /> */}
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
