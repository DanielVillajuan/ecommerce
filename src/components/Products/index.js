import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import * as productActions from "../../redux/actions/productAction";
import Product from "./Product";
import Filter from "../Filters";

const Products = () => {
  const { products } = useSelector((state) => state.productReducer);
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const handleChangeSearch = ({ target: { value } }) => {
    setSearch(value);
  };

  const productsFilters = !search
    ? products
    : products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );

  useEffect(() => {
    dispatch(productActions.getProducts());
  }, [dispatch]);

  return (
    <Container>
      <Filter onChangeInput={handleChangeSearch} />
      <Row md={3} xs="auto">
        {productsFilters.map((p) => (
          <Col key={p.id} className="mb-4">
            <Product product={p} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
