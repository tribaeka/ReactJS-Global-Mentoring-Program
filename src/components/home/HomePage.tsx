import React from 'react';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';
import {MovieDetailsProvider} from '../contexts';
import Popups from "../popups/Popups";

const HomePage: React.FC = () => {

    return (
        <MovieDetailsProvider>
            <Popups>
                <Header/>
                <Main/>
                <Footer/>
            </Popups>
        </MovieDetailsProvider>
    );
};

export default React.memo(HomePage);