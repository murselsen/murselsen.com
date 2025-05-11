import React from 'react';
import HomeCss from './Css/HomeContent.module.css';

// Components
import ConstCodeText from '../../components/ConstCodeText/ConstCodeText';

const HomeContent = () => {
    return (
        <>
            <div className={HomeCss.content}>
                <div className={HomeCss.content__introduction}>
                    <p className={HomeCss.message}>Hi all. I am
                    </p>
                    <h1 className={HomeCss.username}>Mürsel Şen</h1>
                    <p className={HomeCss.mission}>junior full stack developer</p>
                </div>
                <div className={HomeCss.content__link}>
                    <p className={HomeCss.message}>// find my profile on Github:</p>
                    <ConstCodeText variable="Github" value="github.com/murselsen" type="link" link="https://github.com/murselsen" />

                    <p className={HomeCss.message}>// my personal Social Media profiles:</p>
                    <ConstCodeText variable="Instagram" value="instagram.com/35.mursel" type="link" link="https://www.instagram.com/35.mursel/" />
                    <ConstCodeText variable="linkedin" value="linkedin.com/murselsen/" type="link" link="https://www.linkedin.com/in/murselsen/" />
                </div>
            </div>
        </>
    )
}
export default HomeContent;