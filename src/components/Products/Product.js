import React from "react";
import Image from "../Widgets/Image";

const Product = ({ product }) => {
  return (
    <>
      <Image alt={product.title} />
      <h4>{product.title}</h4>
      <p>${product.price}</p>
    </>
  );
};

export default Product;
