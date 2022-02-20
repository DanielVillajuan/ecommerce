import React from "react";
import { Button, Container } from "react-bootstrap";

const CarroItem = ({ item, onClickButton }, ...props) => {
  return (
    <Container
      key={props.key}
      className="m-1 shadow-sm d-flex justify-content-between border  p-3 rounded align-items-center"
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
        <Button className="mx-2" variant="dark" onClick={onClickButton}>
          X
        </Button>
      </Container>
    </Container>
  );
};

export default CarroItem;
