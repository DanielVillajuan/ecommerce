import React from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as userActions from "../../redux/actions/userActions";
import * as carritoActions from "../../redux/actions/carritoAction";

const Carrito = () => {
  const { carro } = useSelector((state) => state.carritoReducer);
  const { user } = useSelector((state) => state.userReducer);
  const history = useHistory();
  const dispatch = useDispatch();

  const redirectHome = () => history.push("/");

  const totalPrice = () => carro.reduce((acum, item) => acum + item.price, 0);

  const submitBuy = () => {
    const success = totalPrice() < user.credit;

    if (success) {
      user.credit -= totalPrice();
      dispatch(userActions.updateUser(user));
      dispatch(carritoActions.clear());
    }
    history.push("/status", success);
  };

  const mapCarrito = () =>
    carro.map((item, index) => (
      <Container
        key={index}
        className="d-flex justify-content-between border  p-3 rounded align-items-center"
      >
        <Container
          className="d-flex justify-content-between px-0 align-items-center"
          style={{
            borderRadius: 5,
            backgroundClip: "content-box",
            backgroundColor: "rgba(220,220,220,0.5)",
          }}
        >
          <Container className="d-flex align-items-center px-0">
            <img style={{ width: 70 }} alt="asd" src="/image-product.jpg" />
            <h6 className="mb-0 mx-1">{item.title}</h6>
          </Container>
          <p className="mx-2 mb-0">
            <b>${item.price}</b>
          </p>
          <Button className="mx-2" variant="dark">
            X
          </Button>
        </Container>
      </Container>
    ));

  return (
    <>
      <h1 className="mb-4 mt-4 text-center">
        <b>Carrito</b>
      </h1>
      <Container style={{ width: "60%" }}>
        {mapCarrito()}
        <Container className="d-flex justify-content-between border py-2 mt-4 rounded align-items-center">
          <b>Total</b>
          <b>${totalPrice()}</b>
        </Container>
        <Container className="d-flex justify-content-between py-4 px-0">
          <Button variant="dark" onClick={redirectHome}>
            Volver al catalogo
          </Button>
          <Button variant="dark" onClick={submitBuy}>
            Finalizar compra
          </Button>
        </Container>
      </Container>
    </>
  );
};

export default Carrito;
