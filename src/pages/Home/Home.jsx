import React, { useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios';
import HomeContent from './HomeContent';
import HomeMedia from './HomeMedia';
const Home = () => {
    const [myProfile, setMyProfile] = useState();
    const randomMyPhotoRender = async () => {
        axios.defaults.baseURL = "https://api.murselsen.com/"; // Replace with your API base URL
        const myPhotos = await axios.get("/photos");
        const randomNumber = Math.floor(Math.random() * myPhotos.data.dbPhotos.length);

        const randomPhoto = myPhotos.data.dbPhotos[randomNumber];
        const url = `${axios.defaults.baseURL}/photos/${randomPhoto.name}`
        setMyProfile(url);

    }
    useEffect(() => {

        randomMyPhotoRender()
        return;
    })
    return (

        <>
            <HomeContent />
            <HomeMedia myProfile={myProfile} />
        </>
    );
}





export default Home;