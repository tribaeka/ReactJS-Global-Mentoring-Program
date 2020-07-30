import React from "react";
import ReactDOM from "react-dom";

import './scss/index.scss';
import App from "./components/App/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    rootElement
);
