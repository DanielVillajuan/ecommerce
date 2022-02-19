import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as productActions from "../../redux/actions/productAction";
import Product from "./Product";

const Products = () => {
  const { products } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productActions.getProducts());
  }, [dispatch]);

  return (
    <>
      {products.map((p) => (
        <Product key={p.id} product={p} />
      ))}
    </>
  );
};

export default Products;
