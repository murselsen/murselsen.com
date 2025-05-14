import React from 'react'
import Css from './Badge.module.css'
import 'remixicon/fonts/remixicon.css'

const Badge = ({
    title,
    icon = false,
    tag = false

}) => {
    return (
        <div className={Css.Badge}>
            {tag ? <span>#</span> : ""}
            {icon ? <i className={icon}></i> : ""}
            <p>{title}</p>
        </div>
    )
}

export default Badge;