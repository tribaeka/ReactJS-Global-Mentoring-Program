import React from "react";
import './initialPage.scss';
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
import Popups from "@components/popups/Popups";
import MoviesNavigation from "../../movies-navigation/MoviesNavigation";
import SearchResults from "../../search-results/SearchResults";

const InitialPage: React.FC = () => {
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

export default React.memo(InitialPage);
