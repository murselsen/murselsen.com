import React, {useEffect, useState} from 'react'
import Css from './Css/AboutContent.module.css'
// import Gist from 'super-react-gist'
import {selectGithubUserGists, selectGithubUserProfile} from "../../redux/github/selectors.js";
import {fetchGistById} from "../../redux/github/thunk.js";
import {useDispatch, useSelector} from "react-redux";
import {FaGithub} from "react-icons/fa6";


const AboutContent = () => {
    const [gists, setGists] = useState([])
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchGistById("06c881d16e124364b32f70c30ad5a87f"))
    }, [dispatch])

    const gistsData = useSelector(selectGithubUserGists);
    useEffect(() => {
        gistsData && setGists(gistsData)
    }, [gistsData]);
    return (
        <div className={Css.about__content}>
            <div className={Css.content__info} id="aboutContent">
                <p className={Css.tag}>/**</p>
                <p className={Css.text}>I'm Mürsel</p>
                <p className={Css.text}>I live in İzmir, but my dreams are wide enough to reach every corner of the
                    world, line by line, through code. My
                    technical journey began with electricity meters, but over time, my growing passion for software
                    opened up an
                    entirely
                    new path. Writing code, for me, is more than just a job—it's the most powerful way to create, to
                    solve
                    problems, and to
                    express myself. I put on my music, grab a coffee, and start coding—becoming a little more myself
                    with every
                    line I
                    write.</p>
                <p className={Css.text}>Right now, I'm steadily progressing on the path to becoming a Full Stack
                    Developer. I'm eager to learn new technologies,
                    build different kinds of projects, and pursue this craft with passion. I'm ready to turn this
                    passion from a
                    hobby into
                    a full-fledged career. Because I truly believe that anything done with passion eventually turns into
                    success. And I’m
                    determined to walk that path.</p>
                <p className={Css.tag}>&nbsp;&nbsp;*/</p>
            </div>
            <div className={Css.content__gh}>
                {/*https://api.github.com/gists/06c881d16e124364b32f70c30ad5a87f*/}
                <div className={Css.content__ghList} id="ghList">
                    {/*selectGithubUserGists*/}
                    {gists.map((item, index) => (
                            <GistContent data={item} key={index}/>
                        )
                    )}
                </div>
            </div>
        </div>
    )
}


const GistContent = ({data}) => {
    const profile = useSelector(selectGithubUserProfile)
    const {files, html_url, owner, created_at} = data;

    return (
        <div className={Css.ghGist}>
            <div className={Css.ghHeader}>
                <img src={owner.avatar_url} className={Css.ghHeader_Photo}/>
                <div className={Css.ghHeader_Info}>
                    <p className={Css.ghHeader_Name}>@{owner.login}</p>
                    <p className={Css.ghHeader_Date}>{created_at.split("T")[0]}</p>
                </div>
            </div>
            <div className={Css.ghBody}>
                <code>
                    {
                        Object.values(files)[0].content.toString().replace(";", "; \n")
                    }
                </code>
            </div>
            <div className={Css.ghFooter}>
                <a href={html_url} target={"_blank"}> <FaGithub/> </a>
            </div>
        </div>
    )
}


export default AboutContent