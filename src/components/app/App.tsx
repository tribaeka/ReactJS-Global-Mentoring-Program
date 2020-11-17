import React from 'react';
import { Provider } from 'react-redux';
import { store } from "@store/index";
import './App.scss';
import OppsErrorPage from "../errors/opps-error-page/OppsErrorPage";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PageNotFoundErrorPage from "@components/errors/404-error-page/PageNotFoundErrorPage";
import Film from "../pages/film/film";
import Home from "../pages/home/home";
import Initial from "../pages/initial/initial";

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <OppsErrorPage>
                <Router>
                    <Switch>
                        <Route path="/" exact={true} component={Initial}/>
                        <Route path="/search/:search" component={Home}/>
                        <Route path="/film/:filmId" component={Film}/>
                        <Route path="*" component={PageNotFoundErrorPage}/>
                    </Switch>
                </Router>
            </OppsErrorPage>
        </Provider>
    );
};

export default App;
