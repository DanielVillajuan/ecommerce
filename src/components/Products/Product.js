import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import * as carritoActions from "../../redux/actions/carritoAction";

const Product = ({ product }) => {
  const [handleButtonProperty, setHandleButtonProperty] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();

  const addCarritoProduct = () => {
    dispatch(carritoActions.addCarrito(product));
    setHandleButtonProperty(false);
  };

  const goCarrito = () => {
    history.push("/carrito");
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
            onClick={handleButtonProperty ? addCarritoProduct : goCarrito}
          >
            {handleButtonProperty ? "Agregar al carrito" : "Ver Carrito"}
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
