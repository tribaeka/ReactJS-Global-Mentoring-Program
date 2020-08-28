import React, {useMemo} from 'react';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';
import { useSelector } from 'react-redux';
import { IMoviePopupsState } from '../../stores/reducers/MoviePopupsReducer';
import AddMoviePopup from '../popups/moviePopup/addMoviePopup/AddMoviePopup';
import EditMoviePopup from '../popups/moviePopup/editMoviePopup/EditMoviePopup';
import DeleteMoviePopup from '../popups/moviePopup/deleteMoviePopup/DeleteMoviePopup';



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
            case 'addMoviePopup':
                return <AddMoviePopup title={popupTitle}/>;
            case 'editMoviePopup':
                return <EditMoviePopup title={popupTitle} movie={popupData}/>;
            case 'deleteMoviePopup':
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
