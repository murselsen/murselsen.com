import React from 'react';
import Css from './Css/Projects.module.css'
import {FaCss3, FaHtml5, FaJava, FaPhp, FaPython} from "react-icons/fa6";
import {IoLogoJavascript} from "react-icons/io";


// Components
import Sidebar from "../../components/Sidebar/Sidebar";

const Projects = () => {
    return (
        <div className={Css.ProjectsPage}>
            <Sidebar/>
            <div className={Css.Content}>
                <div className={Css.LanguageTabArea}>
                    
                    <ul className={Css.LanguageTabList}>
                        <li className={Css.LanguageTabItem}>
                            <FaHtml5/> <span>Html</span>
                        </li>
                        <li className={Css.LanguageTabItem}>
                            <FaCss3/> <span>Css</span>
                        </li>
                        <li className={Css.LanguageTabItem}>
                            <IoLogoJavascript/> <span>Javascript</span>
                        </li>
                        <li className={Css.LanguageTabItem}>
                            <FaPython/> <span>Python</span>
                        </li>
                        <li className={Css.LanguageTabItem}>
                            <FaJava/> <span>Java</span>
                        </li>
                        <li className={Css.LanguageTabItem}>
                            <FaPhp/> <span>Php</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Projects;