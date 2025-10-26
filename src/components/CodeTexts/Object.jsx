import React from 'react';
import styles from './styles/Object.module.css'
import constStyles from './styles/Const.module.css';
import methodStyles from "./styles/Method.module.css";

// Components
import Const from "./Const.jsx";

const Object = ({
                    constValue = "objectName",
                    values = []
                }) => {
    return (
        <div className={styles.ObjectCode}>
            <p style={{"display": "flex", gap: 8}}><Const value={constValue}/> <span>=</span> <span>{'{'}</span></p>
            <ul className={styles.ObjectList}>
                {
                    values.length > 0 ? values.map((item, index) => (
                        <li key={index} className={styles.ObjectItem}>
                            <span className={constStyles.variable}>{
                                item.key
                            }:</span>
                            <span className={methodStyles.methodText}>"{item.value}"</span>
                        </li>
                    )) : null
                }

            </ul>
            <p>{"};"}</p>
        </div>
    );
};

export default Object;