import React from 'react';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';
import { useSelector } from 'react-redux';
import { PopupState } from '../stores/reducers/PopupsReducer';
import AddMoviePopup from '../popups/addMoviePopup/AddMoviePopup';


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
