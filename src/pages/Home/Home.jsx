import React, {useEffect} from "react";
import styles from "./Css/Home.module.css";
// Components
import HomeContent from "./HomeContent";
import HomeMedia from "./HomeMedia";

// Redux
import {useDispatch, useSelector} from "react-redux";
import {selectGithubUserProfile} from "../../redux/github/selectors.js";
import {fetchProfileGithub} from "../../redux/github/thunk.js";


const Home = () => {
    const dispatch = useDispatch();
    const githubData = useSelector(selectGithubUserProfile);
    useEffect(() => {
        githubData === null && dispatch(fetchProfileGithub())
    }, [dispatch, githubData]);
    return (
        <div className={styles.HomePage}>
            <HomeContent/>
            <HomeMedia/>
        </div>
    );
};

export default Home;
