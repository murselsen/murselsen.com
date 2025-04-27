const myPhoto = document.querySelector("#myPhoto");

const randomMyPhoto = () => {
    const myPhotos = [
        "IMG_20240713_150251.jpg",
        "IMG_20250209_213136.jpg",
        "IMG_20230101_163047.jpg",
        "IMG_20231015_135507.jpg",
        "IMG_20250208_145135.jpg",
        "IMG_20250303_145425.jpg",
    ]
    const randomNumber = Math.floor(Math.random() * myPhotos.length);

    const randomPhoto = myPhotos[randomNumber];
    myPhoto.src = `./images/myPhoto/${randomPhoto}`;
}
setTimeout(() => randomMyPhoto(), 1000);