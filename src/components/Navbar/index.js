import React, { useEffect } from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as userActions from "../../redux/actions/userActions";

const Navigation = ({ children }) => {
  const {
    user: { firstName, credit },
  } = useSelector((state) => state.userReducer);

  const { carro } = useSelector((state) => state.carritoReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getUser());
  }, [dispatch]);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Tiendas de productos
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Navbar.Text>{firstName}</Navbar.Text>
              <Nav.Link as={Link} to="/carrito">
                <b>Carrito ({carro.length})</b>
              </Nav.Link>
              <Navbar.Text>Credito $ {credit}</Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {children}
    </>
  );
};

export default Navigation;
