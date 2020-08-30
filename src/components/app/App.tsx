import React from 'react';
import { Provider } from 'react-redux';
import { moviePopupsStore } from "@store/index";
import ErrorPage from "@components/errors/errorPage/ErrorPage";
import HomePage from "@components/home/HomePage";


const App: React.FC = () => {
    return (
        <Provider store={moviePopupsStore}>
            <ErrorPage>
                <HomePage/>
            </ErrorPage>
        </Provider>
    );
}

export default App;
