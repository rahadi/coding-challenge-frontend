import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Routes from "./components/routes";
import configureStore from "./store";
import App from "./components/app";
import { ConnectedRouter } from "connected-react-router";
import "./stylesheets/bulma.css";

const { store, history } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Routes />
      </App>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
