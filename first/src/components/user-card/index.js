import React from 'react';
import verifyImg from './icon.png';
import styles from './index.module.css';

export const UserCard = () => {
    return (
        <div className={styles.wrapper}>
            <img src='adasd' alt='avatar' className={styles.avatar}/>
            <h3 className={styles.header}>User lastname</h3>
            <p className={styles.label}>user name</p>
            <button className={styles.verifyButton}>verify</button>
            <img className={styles.verify} src={verifyImg}/>
        </div>
    );
};