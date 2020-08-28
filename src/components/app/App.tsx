import React from 'react';
import HomePage from '../home/HomePage';
import { Provider } from 'react-redux';
import { moviePopupsStore } from '../../stores/MoviePopupsStore';
import ErrorPage from '../errors/ErrorPage/ErrorPage';


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
