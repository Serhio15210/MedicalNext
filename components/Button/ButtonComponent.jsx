import React from "react";
import styles from './ButtonComponent.module.sass';

export const ButtonComponent = ({title, onClick, color, backgroundColor}) => {
    return (
        <button onClick={onClick} className={styles.button} style={{color: color, backgroundColor: backgroundColor,borderWidth:0}}>
            {title}
        </button>
    )
}
