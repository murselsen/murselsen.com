import React, { Children } from 'react'
import Css from './Accordion.module.css';

// AccordionList component
const AccordionList = ({
    accordionList
}) => {
    return (
        <ul className={Css.accordion}>
            {accordionList ? accordionList.map((item, index) => (
                <AccordionItem key={index} title={item.title} list={
                    item.list
                } />
            )) : null}


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