import React from 'react';
import Css from './ConstCodeText.module.css';

const ConstCodeText = ({
     variable, type, value, link = "#"
}) => {
    return (
        <p className={Css.code}>
            <span className={Css.constant}>const</span>
            <span className={Css.variable}>{variable}</span> <span>=</span>
            {type !== "link" ? <span className={Css.value}>{value}</span> :
                <a href={link} target="_blank"
                    className={Css.value}>"{value}"</a>
            }
        </p>
    )
}

export default ConstCodeText;