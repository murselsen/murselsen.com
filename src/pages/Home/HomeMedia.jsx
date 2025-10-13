import React, { useState, useEffect } from 'react';
import axios from 'axios';

import HomeCss from './Css/HomeMedia.module.css';

const HomeMedia = () => {







    return (
        <>
            <div className={HomeCss.media}>
                <div className={HomeCss.profile}>
                    <img src={"#"} alt="Mürsel Şen" id="myPhoto" className={HomeCss.profile__image} />
                </div>
            </div>
        </>
    )
}
export default HomeMedia;