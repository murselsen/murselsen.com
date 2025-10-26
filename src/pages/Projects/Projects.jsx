import React, {useEffect} from 'react';
import Css from './Css/Projects.module.css'
import {FaCodeFork, FaDisplay, FaEye, FaGithubAlt} from "react-icons/fa6";
import {GrLanguage} from "react-icons/gr";
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
                    <a href={data.html_url} title={"Github Page"} className={Css.ActionLink} target={"_blank"}>
                        <FaGithubAlt/>
                    </a>
                    {data.homepage !== "" &&
                        <a href={data.homepage} title={"Live"} className={Css.ActionLink} target={"_blank"}>
                            <FaDisplay/>
                        </a>}


                </div>
                <div className={Css.Header}>
                    <h6 className={Css.Name}>
                        {data.fork && <FaCodeFork/>} {data.name.split("-").join(" ")}

                    </h6>
                    <p className={Css.Description}>
                        {data.description !== null ? data.description : "// No Description"}
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
                        <li className={Css.StatusItem}>
                            <GrLanguage/> <b>Language:</b>
                            <span>{data.language !== null ? data.language : "undefined"}</span>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Projects;