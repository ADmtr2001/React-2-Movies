import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {GlobalStyles} from "./globalStyles";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(<BrowserRouter>
  <GlobalStyles/>
  <App/>
</BrowserRouter>, document.getElementById("root"));
