import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Carrito from "../components/Carrito";
import Error from "../components/Error";

import Home from "../components/Home";
import Navigation from "../components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/carrito" component={Carrito} />
          <Route exact path="/error" component={Error} />
        </Switch>
      </Navigation>
    </BrowserRouter>
  );
};

export default App;
