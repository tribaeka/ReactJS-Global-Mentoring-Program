import React from "react";
import './initial.scss';
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
import Popups from "@components/popups/Popups";
import MoviesNavigation from "../../movies-navigation/MoviesNavigation";
import EmptyList from "../../empty-list/emptyList";

const Initial: React.FC = () => {
    return (
        <Popups>
            <div className="initial-page">
                <Header/>
                <div className="main-container">
                    <MoviesNavigation/>
                    <EmptyList/>
                </div>
                <Footer/>
            </div>
        </Popups>
    );
};

export default React.memo(Initial);
