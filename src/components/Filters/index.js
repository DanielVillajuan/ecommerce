import React from "react";
import {
  Container,
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
} from "react-bootstrap";

const Filters = () => {
  return (
    <Container className="d-flex justify-content-between py-4 px-0">
      <Form.Control
        className="mb-3"
        size="sm"
        type="text"
        placeholder="Buscar producto por nombre"
      />
      <InputGroup className="mb-3">
        <DropdownButton
          variant="outline-secondary"
          title="Ordenar por "
          id="input-group-dropdown-2"
          align="end"
        >
          <Dropdown.Item
            onClick={() => {
              console.log("menor");
            }}
          >
            Menor precio
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              console.log("mayor");
            }}
          >
            Mayor precio
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Ninguna</Dropdown.Item>
        </DropdownButton>
      </InputGroup>
    </Container>
  );
};

export default Filters;
