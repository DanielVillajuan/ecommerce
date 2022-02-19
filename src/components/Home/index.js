import React from "react";
import { Container } from "react-bootstrap";
import Filters from "../Filters";

import Products from "../Products";

const Home = () => {
  return (
    <>
      <Container className="mx-auto pt-4">
        <h1 className="mb-4 mt-4 text-center">Catalogo</h1>
        <Filters />
        <Products />
      </Container>
    </>
  );
};

export default Home;
