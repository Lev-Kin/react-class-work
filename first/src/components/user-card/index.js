import React from 'react';
import verifyImg from './icon.png';
import styles from './index.module.css';

export const UserCard = ({avatar, first_name, last_name}) => (
    <div className={styles.wrapper}>
        <img src={avatar} alt='avatar' className={styles.avatar}/>
        <h3 className={styles.header}>{last_name}</h3>
        <p className={styles.label}>{first_name}</p>
        <button className={styles.verifyButton}>verify</button>
        <img className={styles.verify} src={verifyImg}/>
    </div>
);