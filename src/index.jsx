import React from "react";
import ReactDOM from "react-dom";

import './styles/style.scss';
import App from "./common/App/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    rootElement
);
