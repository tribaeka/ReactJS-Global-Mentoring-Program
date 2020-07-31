import * as React from "react";
import * as ReactDOM from "react-dom";

import './scss/index.scss';
import App from "./components/App/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <App/>,
    rootElement
);
