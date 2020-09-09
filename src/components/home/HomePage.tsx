import React, {useMemo} from 'react';
import {connect} from "react-redux";
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';
import AddMoviePopup from '@components/popups/moviePopup/addMoviePopup/AddMoviePopup';
import EditMoviePopup from '@components/popups/moviePopup/editMoviePopup/EditMoviePopup';
import DeleteMoviePopup from '@components/popups/moviePopup/deleteMoviePopup/DeleteMoviePopup';
import { IMoviePopupsState } from "@store/moviePopups/reducers";
import { MOVIE_POPUPS_MAP } from "@store/moviePopups/types";
import './homePage.scss';
import {MovieDetailsProvider} from "../contexts";
import {RootState} from "../../store";

interface HomePageProps {
    isPopupOpened: IMoviePopupsState["isPopupOpened"],
    popupName: IMoviePopupsState["popupName"],
    popupTitle: IMoviePopupsState["popupTitle"],
    popupData: IMoviePopupsState["movie"]
}

const HomePage: React.FC<HomePageProps> = (
    {
        isPopupOpened,
        popupName,
        popupTitle,
        popupData
    }) => {

    const activePopup = useMemo(() => {
        switch (popupName) {
            case MOVIE_POPUPS_MAP.ADD:
                return <AddMoviePopup title={popupTitle}/>;
            case MOVIE_POPUPS_MAP.EDIT:
                return <EditMoviePopup title={popupTitle} movie={popupData}/>;
            case MOVIE_POPUPS_MAP.DELETE:
                return <DeleteMoviePopup title={popupTitle} movie={popupData}/>;
            default:
                return;
        }
    }, [isPopupOpened]);

    return (
        <MovieDetailsProvider>
            <div className={isPopupOpened ? 'home-page-container popup-background-blurred': 'home-page-container'}>
                <Header/>
                <Main/>
                <Footer/>
            </div>
            {activePopup}
        </MovieDetailsProvider>

    );
};

const mapStateToProps = (state: RootState): HomePageProps => {
    return {
        isPopupOpened: state.popups.isPopupOpened,
        popupName: state.popups.popupName,
        popupTitle: state.popups.popupTitle,
        popupData: state.popups.movie
    };
};

export default connect(mapStateToProps, null)(HomePage);
