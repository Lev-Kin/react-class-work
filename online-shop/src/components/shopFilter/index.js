import React from "react";
import filterIcon from "../../assets/filter_icon.png";
import styles from "./index.module.css";

export const ShopFilter = () => {
  return (
    <button className={styles.filterButton}>
      <img src={filterIcon} alt="filter" />
    </button>
  );
};
