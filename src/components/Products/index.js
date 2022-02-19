import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
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
    <Container>
      <Row md={3} xs="auto">
        {products.map((p) => (
          <Col key={p.id} className="mb-4">
            <Product product={p} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
