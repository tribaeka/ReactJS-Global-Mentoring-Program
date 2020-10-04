import React from 'react';
import { Provider } from 'react-redux';
import { store } from "@store/index";
import HomePage from "../pages/home/home";
import './App.scss';
import OppsErrorPage from "../errors/opps-error-page/OppsErrorPage";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PageNotFoundErrorPage from "@components/errors/404-error-page/PageNotFoundErrorPage";
import InitialPage from "../pages/initial/initial";

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <OppsErrorPage>
                <Router>
                    <Switch>
                        <Route path="/" exact={true} component={InitialPage}/>
                        <Route path="/search/:search" component={HomePage}/>
                        <Route path="*" component={PageNotFoundErrorPage}/>
                    </Switch>
                </Router>
            </OppsErrorPage>
        </Provider>
    );
};

export default App;
