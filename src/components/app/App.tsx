import React from 'react';
import { Provider } from 'react-redux';
import { store } from "@store/index";
import HomePage from "@components/pages/homePage/HomePage";
import './App.scss';
import OppsErrorPage from "../errors/oppsErrorPage/OppsErrorPage";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PageNotFoundErrorPage from "@components/errors/404ErrorPage/PageNotFoundErrorPage";
import InitialPage from "@components/pages/initialPage/initialPage";

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
