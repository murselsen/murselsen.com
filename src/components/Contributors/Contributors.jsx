import React from 'react';
import Css from './Contributors.module.css';


const Contributors = ({
    contributors
}) => {
    console.log(contributors);
    return (
        <div className={Css.Contributors}>
            {contributors ? contributors.map((item, index) => (
                <ContributorsItem key={index} title={item.title} />
            )) : null}
        </div>
    );
}



const ContributorsItem = ({ link, imageLink, title }) => {
    return (
        <>
            <div className={Css.item}>
                <a href={link ? link : "#"} className={Css.link} title={title} target="_blank">
                    <img src={
                        imageLink ?
                            imageLink
                            :
                            "https://cdn-icons-png.flaticon.com/512/6858/6858463.png"
                    } alt={title}
                        className={Css.img} />
                    <span className={Css.title}>{title}</span>
                </a>
            </div>
        </>
    );

};
export default Contributors;