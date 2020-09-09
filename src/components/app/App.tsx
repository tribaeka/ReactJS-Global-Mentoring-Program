import React from 'react';
import { Provider } from 'react-redux';
import { store } from "@store/index";
import HomePage from "@components/home/HomePage";
import './App.scss';
import OppsErrorPage from "../errors/oppsErrorPage/oppsErrorPage";

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <OppsErrorPage>
                <HomePage/>
            </OppsErrorPage>
        </Provider>
    );
}

export default App;
