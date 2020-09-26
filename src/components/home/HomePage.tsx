import React from 'react';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';
import Popups from "../popups/Popups";

const HomePage: React.FC = () => {

    return (
        <Popups>
            <Header/>
            <Main/>
            <Footer/>
        </Popups>
    );
};

export default React.memo(HomePage);