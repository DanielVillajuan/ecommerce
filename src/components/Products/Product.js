import React from "react";
import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import * as carritoActions from "../../redux/actions/carritoAction";
import * as userActions from "../../redux/actions/userActions";

const Product = ({ product }) => {
  const { user } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();

  const addCarritoProduct = () => {
    user.credit -= product.price;
    dispatch(carritoActions.addCarrito(product));
    dispatch(userActions.updateUser(user));
  };

  return (
    <>
      <Card
        className="mx-auto"
        style={{ width: 250, height: 400, paddingBottom: "100%" }}
      >
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
