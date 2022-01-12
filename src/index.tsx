import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {GlobalStyles} from "./globalStyles";
import {BrowserRouter} from "react-router-dom";
import {setupStore} from "./store/store";
import {Provider} from "react-redux";

const store = setupStore();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <GlobalStyles/>
      <App/>
    </Provider>
  </BrowserRouter>, document.getElementById("root"));
