import React from 'react';
import Css from './Css/Projects.module.css'
import {FaReact} from "react-icons/fa6";

// Components
import Sidebar from "../../components/Sidebar/Sidebar";

const Projects = () => {
    return (
        <div className={Css.ProjectsPage}>
            <Sidebar/>
            <div className={Css.Content}>
                <div className={Css.LanguageTabArea}>
                    <h3 className={Css.LanguageTabArea_Title}>
                        Projects
                    </h3>
                    <ul className={Css.LanguageTabList}>
                        <li className={Css.LanguageTabItem}>
                            <FaReact/> <span>React</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Projects;