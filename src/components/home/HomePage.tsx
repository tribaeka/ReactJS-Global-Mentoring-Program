import React, {useMemo} from 'react';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';
import { useSelector } from 'react-redux';
import AddMoviePopup from '../popups/moviePopup/addMoviePopup/AddMoviePopup';
import EditMoviePopup from '../popups/moviePopup/editMoviePopup/EditMoviePopup';
import DeleteMoviePopup from '../popups/moviePopup/deleteMoviePopup/DeleteMoviePopup';
import { IMoviePopupsState } from "../../store/moviePopups/reducers";
import { MOVIE_POPUPS_MAP } from "../../store/moviePopups/types";



const HomePage: React.FC = () => {
    const isPopupOpened = useSelector<IMoviePopupsState, IMoviePopupsState["isPopupOpened"]>(
        state => state.isPopupOpened
    );
    const popupName = useSelector<IMoviePopupsState, IMoviePopupsState["popupName"]>(
        state => state.popupName
    );
    const popupTitle = useSelector<IMoviePopupsState, IMoviePopupsState["popupTitle"]>(
        state => state.popupTitle
    );
    const popupData = useSelector<IMoviePopupsState, IMoviePopupsState["movie"]>(
        state => state.movie
    );

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
        <>
            <div className={isPopupOpened ? 'home-page-container popup-background-blurred': 'home-page-container'}>
                <Header/>
                <Main/>
                <Footer/>
            </div>
            {activePopup}
        </>

    );
}

export default HomePage;
