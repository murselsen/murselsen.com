import React from 'react'
import Css from './Css/AboutSidebar.module.css'
import AccordionList from '../../components/Accordion/AccordionList'
const AboutSidebar = () => {
    return (
        <div class={Css.about__sidebar}>
            <AccordionList />

        </div>
    )
}

export default AboutSidebar