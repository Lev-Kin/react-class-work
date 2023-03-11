import React, { useEffect } from "react";
import { ShopProductsList } from "../components/shopProductsList";
import { ShopMainFilter } from "../components/shopMainFilter";
import { Preloader } from "../components/preloader";
import { useSelector, useDispatch } from "react-redux";
import { selectGoods, selectIsLoading, selectError } from '../redux/slices/products';
import { getProducts } from "../redux/actions/products";


export const Shop = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectGoods);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const shouldShowProducts = products && !isLoading;

  return (
    <>
      <ShopMainFilter />
      {shouldShowProducts && <ShopProductsList products={products} /> }
      {isLoading && <Preloader />}
      {error && <h1>{error}</h1>}
    </>
  );
};
