import React from "react";
import { ShopProduct } from "../shopProduct";
import styles from './index.module.css';


export const ShopProductsList = ({ products }) => {
    return (
        <div className={styles.productList}>
            {
                products.map((product) => (<ShopProduct key={product.id} {...product} />))
            }
        </div>
    );
};