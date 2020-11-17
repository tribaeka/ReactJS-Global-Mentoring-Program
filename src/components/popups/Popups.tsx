import React, {useMemo} from "react";
import './popups.scss';
import {RootState} from "../../store";
import {compose} from "redux";
import {connect} from "react-redux";
import {IMoviePopupsState} from "../../store/moviePopups/reducer";
import {MOVIE_POPUPS_MAP} from "../../store/moviePopups/types";
import AddMoviePopup from "./movie-popup/add-movie-popup/AddMoviePopup";
import EditMoviePopup from "./movie-popup/edit-movie-popup/EditMoviePopup";
import DeleteMoviePopup from "./movie-popup/delete-movie-popup/DeleteMoviePopup";
import {getPopupMovie, getPopupName, getPopupTitle, isPopupOpened} from "../../selectors";

interface PopupProps {
    isPopupOpened: IMoviePopupsState["isPopupOpened"];
    popupName: IMoviePopupsState["popupName"];
    popupTitle: IMoviePopupsState["popupTitle"];
    popupData: IMoviePopupsState["movie"];
}

const Popups: React.FC<PopupProps> = (
    {
        isPopupOpened,
        popupName,
        popupTitle,
        popupData,
        children
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
        <>
            {
                isPopupOpened
                    ? <><div className="popup-background-blurred wrapper">{children}</div>{activePopup}</>
                    : <div className="wrapper">{children}</div>

            }
        </>
    );
};

const mapStateToProps = (state: RootState): PopupProps => {
    return {
        isPopupOpened: isPopupOpened(state),
        popupName: getPopupName(state),
        popupTitle: getPopupTitle(state),
        popupData: getPopupMovie(state)
    };
};

export default compose(
    connect(mapStateToProps, null),
    React.memo
)(Popups);
