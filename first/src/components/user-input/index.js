import React from 'react';
import styles from './index.module.css';


export const UserInput = ({onInputChange, value}) => (
        <div className={styles.wrapper}>
            <label htmlFor='userInput' className={styles.label} >Enter user name</label>
            <input 
                className={styles.userInput}
                type='text'
                id='userInput'
                onChange={onInputChange}
                value={value}
            />
        </div>
    );



