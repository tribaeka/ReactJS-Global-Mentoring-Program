import React from 'react';
import { Provider } from 'react-redux';
import { store } from "@store/index";
import HomePage from "@components/home/HomePage";
import './App.scss';
import OppsErrorPage from "../errors/oppsErrorPage/OppsErrorPage";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PageNotFoundErrorPage from "../errors/404ErrorPage/PageNotFoundErrorPage";

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <OppsErrorPage>
                <Router>
                    <Switch>
                        <Route path="/" exact={true} component={HomePage}/>
                        <Route path="*" component={PageNotFoundErrorPage}/>
                    </Switch>
                </Router>
            </OppsErrorPage>
        </Provider>
    );
};

export default App;
