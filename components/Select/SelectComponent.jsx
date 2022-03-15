import React from "react";
import styles from './SelectComponent.module.sass';

export const SelectComponent = ({handleChange, option, value,width}) => {
    return (
        <div className={styles.container}  >
            <select value={value} defaultValue={''} onChange={handleChange} name='status' style={{width:width}}>
                {option.map((item) => <option key={item}  value={item}>{item}</option>)}
            </select>
        </div>
    )
}
