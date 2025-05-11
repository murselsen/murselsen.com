import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HomeContent from './HomeContent';
import HomeMedia from './HomeMedia';
const Home = () => {
    const [myProfile, setMyProfile] = useState();
    const myPhotoRender = async () => {
        axios.defaults.baseURL = "https://api.murselsen.com/"; // Replace with your API base URL
        const myPhotos = await axios.get("/photos");
        // setMyProfile(url);
        return myPhotos.data.dbPhotos;


    }
    useEffect(() => {

        myPhotoRender().then((myPhotos) => {
            const rdmMyPhotosIndex = Math.floor(Math.random() * myPhotos.length);
            const url = `${axios.defaults.baseURL}/photos/${myPhotos[rdmMyPhotosIndex].name}`
            setMyProfile(url);

        }).catch((err) => {
            console.log(err);
        });
    })
    return (

        <>
            <HomeContent />
            <HomeMedia myProfile={myProfile} />
        </>
    );
}





export default Home;