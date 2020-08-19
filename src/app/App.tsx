import React from 'react';
import HomePage from '../home/HomePage';
import { Provider } from 'react-redux';
import { popupsStore } from '../stores/PopupsStore';


const App: React.FC = () => {
    return (
        <Provider store={popupsStore}>
            <HomePage/>
        </Provider>
    );
}

export default App;
