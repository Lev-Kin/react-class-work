import React from "react";
import filterIcon from '../../assets/filter_icon.png';
import styles from './index.module.css';


export const ShopSearch = () => {
    return (
        <div className={styles.searchWrapper}>
            <input type='text' className={styles.searchInput}/>
            <button className={styles.filterButton}>
                <img src={filterIcon} alt='filter'/>
            </button>
        </div>
    );
};