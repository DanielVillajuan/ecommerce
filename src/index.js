import React from "react";
import ReactDOM from "react-dom";
import App from "./routes/App";
import store from "./store";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
