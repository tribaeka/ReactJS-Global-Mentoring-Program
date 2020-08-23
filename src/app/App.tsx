import React from 'react';
import HomePage from '../home/HomePage';
import { Provider } from 'react-redux';
import { moviePopupsStore } from '../stores/MoviePopupsStore';


const App: React.FC = () => {
    return (
        <Provider store={moviePopupsStore}>
            <HomePage/>
        </Provider>
    );
}

export default App;
