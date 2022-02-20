import React from "react";
import { Container, Dropdown, DropdownButton, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import * as productActions from "../../redux/actions/productAction";

const Filters = () => {
  const dispatch = useDispatch();

  const orderLower = () => {
    dispatch(productActions.orderByLower());
  };
  const orderHigher = () => {
    dispatch(productActions.orderByHigher());
  };

  return (
    <Container className="d-flex py-2 px-0">
      <Form.Control
        className="mb-3"
        type="text"
        placeholder="Buscar producto por nombre"
        style={{ width: 350 }}
      />

      <Container className="mb-3 d-flex justify-content-end">
        <DropdownButton variant="outline-secondary" title="Ordenar por ">
          <Dropdown.Item onClick={orderLower}>Menor precio</Dropdown.Item>
          <Dropdown.Item onClick={orderHigher}>Mayor precio</Dropdown.Item>
        </DropdownButton>
      </Container>
    </Container>
  );
};

export default Filters;
