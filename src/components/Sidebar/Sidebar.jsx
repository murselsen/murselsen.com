import React from 'react'
import Css from './Sidebar.module.css'
import AccordionList from '../../components/Accordion/AccordionList'

const Sidebar = () => {

    const AccordionListData = [
        {
            title: "personal-info", list: [{
                title: "Cv",
                icon: "ri-file-pdf-2-line",
                link: "#"
            }],
        },
        {
            title: "social-media",
            list: [
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
        },
        {
            title: "contacts", list: [
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
        }
    ];
    return (
        <div className={Css.about__sidebar}>
            <AccordionList accordionList={AccordionListData}/>
        </div>
    )
}

export default Sidebar;