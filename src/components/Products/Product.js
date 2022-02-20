import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import * as carritoActions from "../../redux/actions/carritoAction";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const addCarritoProduct = () => {
    dispatch(carritoActions.addCarrito(product));
  };

  return (
    <>
      <Card className="mx-auto shadow" style={{ width: "80%", height: "100%" }}>
        <Card.Img variant="top" src="/image-product.jpg" alt={product.title} />
        <Card.Body className="mx-auto px-4">
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>${product.price}</Card.Text>
          <Button
            style={{ width: "100%" }}
            variant="dark"
            onClick={addCarritoProduct}
          >
            Agregar al carrito
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
