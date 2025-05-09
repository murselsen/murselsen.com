import React from 'react';

const HomeMedia = ({ myProfile }) => {
    return (
        <>
            <div className="media">
                <div className="profile">
                    <img src={myProfile} alt="Mürsel Şen" id="myPhoto" className="profile__image" />
                </div>
            </div>
        </>
    )
}
export default HomeMedia;