import React from "react";
import { useParams } from "react-router-dom";
import { AddToCartButton } from "../components/addToCartButton";

export const Product = () => {
  const { productId } = useParams();

  return (
    <div>
      <h2>Tovar {productId}</h2>
      <div>Price</div>
      <div>Description</div>
      <AddToCartButton size="m" />
    </div>
  );
};
