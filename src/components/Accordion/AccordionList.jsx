import React, { Children } from 'react'
import './Accordion.css';

// AccordionList component
const AccordionList = () => {
    return (
        <ul class="accordion">
            <AccordionItem title="personal-info" list={[{
                title: "Cv",
                icon: "ri-file-pdf-2-line",
                link: "#"
            }]} />
            <AccordionItem title="social-media" list={[{
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
            }]} />
            <AccordionItem title="contacts" list={[{
                title: "murselsen_35",
                icon: "ri-mail-fill",
                link: "mailto:murselsen_35@hotmail.com"
            }, {
                title: "+90-533-147-49-24",
                icon: "ri-phone-fill",
                link: "tel:+905331474924"
            }]} />

        </ul>
    )
}

const AccordionItem = ({ title, list }) => {
    const [isAccordionAltListToggle, setAccordionAltListToggle] = React.useState(false);
    return (
        <li class="accordion-item">
            <h5 class="accordion-item-title" onClick={() => { setAccordionAltListToggle(!isAccordionAltListToggle) }}>{title}</h5>
            <ul class={isAccordionAltListToggle ? "accordion-item__list active" : "accordion-item__list"}>
                {list ? list.map((item, index) => (
                    <li key={index} class="accordion-item__list-item">
                        <a href={item.link} target="_blank">
                            <i class={item.icon}></i>
                            <span>{item.title}</span>
                        </a>
                    </li>
                )) : null}
            </ul>
        </li>
    )
}

export default AccordionList