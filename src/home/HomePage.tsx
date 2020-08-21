import React from 'react';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';
import { useSelector } from 'react-redux';
import { PopupState } from '../stores/reducers/PopupsReducer';
import AddMoviePopup from '../popups/moviePopup/addMoviePopup/AddMoviePopup';
import EditMoviePopup from '../popups/moviePopup/editMoviePopup/EditMoviePopup';
import DeleteMoviePopup from '../popups/moviePopup/deleteMoviePopup/DeleteMoviePopup';



const HomePage: React.FC = () => {
    const isPopupOpened = useSelector<PopupState, PopupState["isPopupOpened"]>(
        state => state.isPopupOpened
    )
    const popupName = useSelector<PopupState, PopupState["popupName"]>(
        state => state.popupName
    )

    function getActivePopup() {
        switch (popupName) {
            case 'addMoviePopup':
                return <AddMoviePopup/>;
            case 'editMoviePopup':
                return <EditMoviePopup/>;
            case 'deleteMoviePopup':
                return <DeleteMoviePopup/>;
            default:
                return ''
        }
    }

    return (
        <>
            <div className={isPopupOpened ? 'home-page-container popup-background-blurred': 'home-page-container'}>
                <Header/>
                <Main/>
                <Footer/>
            </div>
            {isPopupOpened && getActivePopup()}
        </>

    );
}

export default HomePage;
