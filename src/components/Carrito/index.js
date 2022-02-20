import React from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as userActions from "../../redux/actions/userActions";
import * as carritoActions from "../../redux/actions/carritoAction";
import CarroItem from "./CarroItem";

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

  const deleteItem = (id) => {
    dispatch(carritoActions.clearCarritoById(id));
  };

  return (
    <>
      <h1 className="mb-4 mt-4 text-center">
        {totalPrice() > 0 ? <b>Carrito</b> : <b>Carrito Vacio!</b>}
      </h1>
      <Container style={{ width: "60%" }}>
        {carro.map((item, index) => (
          <CarroItem
            item={item}
            key={index}
            onClickButton={() => {
              deleteItem(item.id);
            }}
          />
        ))}
        <Container className="d-flex justify-content-between border py-2 mt-4 rounded align-items-center">
          <b>Total</b>
          <b>${totalPrice()}</b>
        </Container>
        <Container className="d-flex justify-content-between py-4 px-0">
          <Button variant="dark" onClick={redirectHome}>
            Volver al catalogo
          </Button>
          {totalPrice() > 0 && (
            <Button variant="dark" onClick={submitBuy}>
              Finalizar compra
            </Button>
          )}
        </Container>
      </Container>
    </>
  );
};

export default Carrito;
