import React from "react";
import cartIcon from "../../assets/cart_icon.png";
import styles from "./index.module.css";

export const AddToCartButton = ({ handleClick, size = "s" }) => (
  <button
    onClick={handleClick}
    className={`${styles.addToCartButton} ${styles[size]}`}
  >
    <img src={cartIcon} alt="cart" />
  </button>
);
