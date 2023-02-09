import React from "react";
import rocketImg from '../../assets/rocket.gif';
import styles from './index.module.css';

export const Preloader = () => {
    return <div className={styles.wrapper}>
        <img src={rocketImg} alt='rocket'/>
    </div>
};