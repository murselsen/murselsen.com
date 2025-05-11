import React, { useState, useEffect } from 'react';
import axios from 'axios';

import HomeCss from './Css/HomeMedia.module.css';

const HomeMedia = () => {
    const [myProfilePhoto, setMyProfilePhoto] = useState();

    useEffect(() => {
        const myPhotoRender = async () => {
            const apiUrl = "https://api.murselsen.com/photos"
            const photos = await axios.get(apiUrl);
            const randomIndex = Math.floor(Math.random() * photos.data.dbPhotos.length);
            const myPhoto = apiUrl + "/" + photos.data.dbPhotos[randomIndex].name;
            console.log("My Photo: ", myPhoto);
            setMyProfilePhoto(myPhoto);
        }

        myPhotoRender()
    }, []);




    return (
        <>
            <div className={HomeCss.media}>
                <div className={HomeCss.profile}>
                    <img src={myProfilePhoto} alt="Mürsel Şen" id="myPhoto" className={HomeCss.profile__image} />
                </div>
            </div>
        </>
    )
}
export default HomeMedia;