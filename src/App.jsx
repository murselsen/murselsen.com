import React, {lazy, Suspense} from "react";
import AppCss from "./App.module.css";
// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Route, Routes} from "react-router-dom";

// Error Pages   
import Error404 from "./pages/Error404/Error404.jsx";

// Pages
const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const AppProjects = lazy(() => import("./pages/Projects/Projects"));
const AppContact = lazy(() => import("./pages/Contact/Contact"));
const App = () => {

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <header>
                <Header/>
            </header>
            <main>
                <div className={AppCss.Container}>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/project" element={<AppProjects/>}/>
                        <Route path="/contact-me" element={<AppContact/>}/>
                        <Route path="*" element={<Error404/>}/>
                    </Routes>
                </div>
            </main>
            <footer>
                <Footer/>
            </footer>
        </Suspense>
    );
}

export default App;
