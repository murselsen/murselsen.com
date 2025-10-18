import React, {useEffect, useState} from 'react';

import HomeCss from './Css/HomeMedia.module.css';
import {useSelector} from "react-redux";
import {selectGithubUserProfile} from "../../redux/github/selectors.js";

const HomeMedia = ({img}) => {
    const [ghData, setGhData] = useState({})
    const userData = useSelector(selectGithubUserProfile);
    useEffect(() => {
        userData && setGhData(userData)
    }, [userData]);
    const {avatar_url} = ghData;
    return (
        <>
            <div className={HomeCss.media}>
                <div className={HomeCss.profile}>
                    <img src={avatar_url} alt="Mürsel Şen" id="myPhoto" className={HomeCss.profile__image}/>
                </div>
            </div>
        </>
    )
}
export default HomeMedia;