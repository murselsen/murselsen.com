import React, {useEffect} from 'react';
import Css from './Css/Projects.module.css'
import {FaCodeFork, FaCss3, FaEye, FaGithubAlt, FaHtml5, FaJava, FaPhp, FaPython} from "react-icons/fa6";
import {IoLogoJavascript} from "react-icons/io";

import {useDispatch, useSelector} from "react-redux";
import {fetchRepos} from "../../redux/github/thunk.js";
// Components
import Sidebar from "../../components/Sidebar/Sidebar";

// Redux Selector
import {selectGithubUserRepos} from "../../redux/github/selectors.js";

const Projects = () => {
    const dispatch = useDispatch();
    const githubRepos = useSelector(selectGithubUserRepos);


    useEffect(() => {
        dispatch(fetchRepos())
    }, [dispatch])

    console.log(githubRepos);
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
                <div className={Css.Projects}>
                    {
                        githubRepos.length > 0 ? githubRepos.map((item, index) => (
                            <ProjectItem data={item} index={index + 1} key={index}/>
                        )) : null
                    }
                </div>
            </div>
        </div>
    );
};


const ProjectItem = ({
                         index, data
                     }) => {
    return (
        <div className={Css.Project}>
            <h6 className={Css.Title}>
                Project {index} <span className={Css.Name}>
                _{data.name}
            </span>
            </h6>
            <div className={Css.Card}>
                <div className={Css.Actions}>
                    <a href={"#"} className={Css.ActionLink} target={"_blank"}>
                        <FaGithubAlt/>
                    </a>
                    <a href={"#"} className={Css.ActionLink} target={"_blank"}>
                        <FaGithubAlt/>
                    </a>

                </div>
                <div className={Css.Header}>
                    <h6 className={Css.Name}>
                        {data.name}
                    </h6>
                    <p className={Css.Description}>
                        {data.description}
                    </p>
                </div>
                <div className={Css.Body}>
                    <ul className={Css.StatusList}>
                        <li className={Css.StatusItem}>
                            <FaEye/> <b>Watch:</b> <span>{data.watchers}</span>
                        </li>
                        <li className={Css.StatusItem}>
                            <FaCodeFork/> <b>Fork:</b> <span>{data.forks}</span>
                        </li>
                    </ul>
                    <div className={Css.LanguageSpan}>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;