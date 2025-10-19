import React from 'react'
import Css from './About.module.css'

// Page Components
import Sidebar from '../../components/Sidebar/Sidebar'
import AboutContent from './AboutContent'


const About = () => {
    return (
        <div className={Css.AboutPage}>
            <Sidebar/>
            <AboutContent/>
        </div>
    )
}

export default About 