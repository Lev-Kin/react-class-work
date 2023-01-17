import React, {useState} from 'react';
import styles from './index.module.css';


export const UserInput = () => {
   

    return (
        <div className={styles.wrapper}>
            <label htmlFor='userInput' className={styles.label} >Enter user name</label>
            <input className={styles.userInput} type='text' id='userInput'/>
        </div>
    )
};


