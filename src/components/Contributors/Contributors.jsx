import React from 'react';
import Css from './Contributors.module.css';


const Contributors = ({
    contributors
}) => {
    console.log(contributors);
    return (
        <div className="Contributors">
            {contributors ? contributors.map((item, index) => (

            )) : null}
        </div>
    );
}

export default Contributors;


const ContributorsItem = ({ className, link, icon, title }) => {
    return (
        <>
            <div className="Contributors-item">
                <a href="#" className="Contributors-link" title="Username" target="_blank">
                    <img src="https://cdn-icons-png.flaticon.com/512/6858/6858463.png" alt="Username"
                        className="Contributors-link__img" />
                </a>
            </div>
        </>
    );

};