import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { ERROR_TEXT, SUCCESS_TEXT } from "../../constants/types";

const Status = ({ location: { state } }) => {
  const history = useHistory();

  const goHome = () => history.push("/");

  return (
    <Container style={{ width: "60%" }}>
      <h1 className="mb-4 mt-4 text-center">
        <b>Estado de compra</b>
      </h1>
      <Container className="mx-auto">
        <Card className="p-4 mx-auto" style={{ width: "60%" }}>
          <Card.Body className="mx-auto">
            <Card.Text>{state ? SUCCESS_TEXT : ERROR_TEXT}</Card.Text>
          </Card.Body>
          <Button
            className="mt-4"
            style={{ width: "100%" }}
            variant="dark"
            onClick={goHome}
          >
            Volver al catalogo
          </Button>
        </Card>
      </Container>
    </Container>
  );
};

export default Status;
