import React from 'react';
import HomePage from '../home/HomePage';
import { Provider } from 'react-redux';
import ErrorPage from '../errors/ErrorPage/ErrorPage';
import { moviePopupsStore } from "../../store";


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
