import React, { Children } from 'react'
import Css from './Accordion.module.css';

// AccordionList component
const AccordionList = () => {
    return (
        <ul className={Css.accordion}>
            <AccordionItem title="personal-info" list={
                [
                    {
                        title: "Cv",
                        icon: "ri-file-pdf-2-line",
                        link: "#"
                    }
                ]
            } />
            <AccordionItem title="social-media" list={
                [
                    {
                        title: "murselsen",
                        icon: "ri-github-fill",
                        link: "https://www.github.com/murselsen/"
                    }, {
                        title: "35.mursel",
                        icon: "ri-instagram-fill",
                        link: "https://www.instagram.com/35.mursel/"
                    },
                    {
                        title: "murselsen",
                        icon: "ri-linkedin-fill",
                        link: "https://www.linkedin.com/in/murselsen/"
                    }, {
                        title: "35mursel",
                        icon: "ri-discord-fill",
                        link: "https://discord.com/users/643474762085040138"
                    }
                ]
            } />
            <AccordionItem title="contacts" list={
                [
                    {
                        title: "murselsen_35",
                        icon: "ri-mail-fill",
                        link: "mailto:murselsen_35@hotmail.com"
                    },
                    {
                        title: "+90-533-147-49-24",
                        icon: "ri-phone-fill",
                        link: "tel:+905331474924"
                    }
                ]
            } />

        </ul>
    )
}

const AccordionItem = ({ title, list }) => {
    const [isAccordionAltListToggle, setAccordionAltListToggle] = React.useState(true);
    return (
        <li className={Css.item}>
            <h5 className={Css.title} onClick={() => { setAccordionAltListToggle(!isAccordionAltListToggle) }}>{title}</h5>
            <ul className={!isAccordionAltListToggle ? `${Css.list} ${Css.active}` : Css.list}>
                {list ? list.map((item, index) => (
                    <AccordionItem__AltItem
                        key={index}
                        className={Css.listItem}
                        link={item.link}
                        icon={item.icon}
                        title={item.title}
                    />
                )) : null}
            </ul>
        </li >
    )
}

const AccordionItem__AltItem = ({ className, link, icon, title }) => {
    return (
        <li className={className}>
            <a href={link} target="_blank">
                <i className={icon}></i>
                <span>{title}</span>
            </a>
        </li>
    )
};

export default AccordionList