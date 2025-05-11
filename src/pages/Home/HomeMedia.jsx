import React from 'react';
import HomeCss from './Css/HomeMedia.module.css';

const HomeMedia = ({ myProfile }) => {
    return (
        <>
            <div className={HomeCss.media}>
                <div className={HomeCss.profile}>
                    <img src={myProfile} alt="Mürsel Şen" id="myPhoto" className={HomeCss.profile__image} />
                </div>
            </div>
        </>
    )
}
export default HomeMedia;