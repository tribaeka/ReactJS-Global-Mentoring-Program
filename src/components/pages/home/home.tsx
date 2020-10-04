import React from 'react';
import './home.scss';
import Popups from "@components/popups/Popups";
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
import MoviesNavigation from "@components/movies-navigation/MoviesNavigation";
import SearchResults from "@components/search-results/SearchResults";

const Home: React.FC = () => {
    return (
        <Popups>
            <div className="home-page">
                <Header/>
                <div className="main-container">
                    <MoviesNavigation/>
                    <SearchResults/>
                </div>
                <Footer/>
            </div>
        </Popups>
    );
};

export default React.memo(Home)
