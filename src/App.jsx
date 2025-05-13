import React from 'react'
import { Routes, Route } from "react-router";
import AppCss from './App.module.css'


// Pages
import Home from './pages/Home/Home'
// import About from './pages/About/About'
// Components
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div id={AppCss.app}>
      <header>
        <Header />
      </header>
      <main>
        <div className={AppCss.container}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/projects" element={<AppProjects />} /> */}
            {/* <Route path="/contact-me" element={<AppContact />} /> */}
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
