import React from "react";
import { ShopFilter } from "../shopFilter";
import { SearchProductInput } from "../searchProductInput";
import styles from "./index.module.css";

export const ShopMainFilter = () => {
  return (
    <div className={styles.searchWrapper}>
      <SearchProductInput />
      <ShopFilter />
    </div>
  );
};
