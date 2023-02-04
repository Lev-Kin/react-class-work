import React from "react";
import { ShopProductsList } from "../components/shopProductsList";
import { ShopSearch } from "../components/shopSearch";


export const Shop = () => {
    return <>
        <ShopSearch/>
        <ShopProductsList/>
    </>
};