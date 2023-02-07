import React, { useState, useEffect } from "react";
import { ShopProductsList } from "../components/shopProductsList";
import { ShopSearch } from "../components/shopSearch";
import { fetchProducts } from "../utils/fetchProducts";

export const Shop = () => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetchProducts()
        .then(({products: goods}) => {
            setProducts(goods);
        })
    }, []);

    return <>
        <ShopSearch/>
        {products && <ShopProductsList products={products}/>}
    </>
};