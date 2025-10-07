import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import AppCss from "./App.module.css";

// Pages
const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
import Error404 from "./pages/Error404/Error404";
// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div id={AppCss.app}>
      <header>
        <Header />
      </header>
      <main>
        <div className={AppCss.container}>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              {/* <Route path="/projects" element={<AppProjects />} /> */}
              {/* <Route path="/contact-me" element={<AppContact />} /> */}
              <Route path="*" element={<Error404 />} />
            </Routes>
          </Suspense>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
