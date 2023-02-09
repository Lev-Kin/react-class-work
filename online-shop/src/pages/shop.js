import React, { useState, useEffect } from "react";
import { ShopProductsList } from "../components/shopProductsList";
import { ShopMainFilter } from "../components/shopMainFilter";
import { fetchProducts } from "../utils/fetchProducts";
import { Preloader } from "../components/preloader";

export const Shop = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetchProducts().then(({ products: goods }) => {
      setProducts(goods);
    });
  }, []);

  return (
    <>
      <ShopMainFilter />
      {products ? <ShopProductsList products={products} /> : <Preloader />}
    </>
  );
};
