import React, {useEffect, useState} from "react";
import HomeCss from "./Css/HomeContent.module.css";

// Components
import Const from "../../components/CodeTexts/Const";
import Link from "../../components/CodeTexts/Link";
import TextValue from "../../components/CodeTexts/TextValue";

// Redux
import {useSelector} from "react-redux";
import {selectGithubUserProfile} from "../../redux/github/selectors.js";


const HomeContent = () => {
    const [ghData, setGhData] = useState({})
    const userData = useSelector(selectGithubUserProfile);
    useEffect(() => {
        userData && setGhData(userData)
    }, [userData]);
    const {name, company, bio, html_url, blog} = ghData;
    return (
        <>
            <div className={HomeCss.content}>
                <div className={HomeCss.content__introduction}>
                    <p className={HomeCss.message}>Hi all. I am</p>
                    <h1 className={HomeCss.username}>
                        {name}
                    </h1>
                    <p className={HomeCss.mission}>{company}&nbsp;{bio}</p>
                    <p className={HomeCss.mission}>{blog}</p>
                </div>
                <div className={HomeCss.content__link}>
                    <p className={HomeCss.message}>// find my profile on Github:</p>

                    <Const value={"Github"}>
                        <Link value={html_url}/>
                    </Const>
                    <br/>
                    <p className={HomeCss.message}>// my personal email address:</p>

                    <Const value={"Email"}>
                        <TextValue value={"murselsen_35@hotmail.com"}/>
                    </Const>
                    <br/>
                    <p className={HomeCss.message}>
                        // my personal Social Media profiles:
                    </p>

                    <Const value={"Instagram"}>
                        <Link value={"http://www.instagram.com/35.mursel/"}/>
                    </Const>

                    <Const value={"Linkedin"}>
                        <Link value={"http://www.linkedin.com/in/murselsen/"}/>
                    </Const>
                </div>
            </div>
        </>
    );
};
export default HomeContent;
