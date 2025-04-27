import axios from "axios";
const myPhoto = document.querySelector("#myPhoto");
document.addEventListener("DOMContentLoaded", async () => {
    const myPhotos = await axios.get("/photos");
    console.log(myPhotos);
    const randomMyPhotoRender = () => {
        const randomNumber = Math.floor(Math.random() * myPhotos.data.dbPhotos.length);

        const randomPhoto = myPhotos.data.dbPhotos[randomNumber];

        myPhoto.src = `${axios.defaults.baseURL}/photos/${randomPhoto.name}`;
    }
    randomMyPhotoRender();
    setTimeout(randomMyPhotoRender(), 1000);

});