import React from "react";
import styles from './InputComponent.module.sass';

export const InputComponent = ({handleSearch, placeholder,width=500}) => {
    return (
        <form onSubmit={handleSearch} className={styles.form} style={{width:width }}  >
            <input className={styles.input} placeholder={placeholder}   />


        </form>
    )
}
