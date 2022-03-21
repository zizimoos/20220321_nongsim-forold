import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* { 
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  font-weight: 100;
}
a {
  text-decoration: none;
}
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
