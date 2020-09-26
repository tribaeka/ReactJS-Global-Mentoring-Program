import React, {useMemo} from "react";
import './popups.scss';
import {RootState} from "../../store";
import {compose} from "redux";
import {connect} from "react-redux";
import {IMoviePopupsState} from "../../store/moviePopups/reducer";
import {MOVIE_POPUPS_MAP} from "../../store/moviePopups/types";
import AddMoviePopup from "./moviePopup/addMoviePopup/AddMoviePopup";
import EditMoviePopup from "./moviePopup/editMoviePopup/EditMoviePopup";
import DeleteMoviePopup from "./moviePopup/deleteMoviePopup/DeleteMoviePopup";

interface PopupProps {
    isPopupOpened: IMoviePopupsState["isPopupOpened"],
    popupName: IMoviePopupsState["popupName"],
    popupTitle: IMoviePopupsState["popupTitle"],
    popupData: IMoviePopupsState["movie"]
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
    const wrappedPage = useMemo(() => {
        if (isPopupOpened) {
            return <><div className="popup-background-blurred">{children}</div>{activePopup}</>;
        }
        return children;
    }, [isPopupOpened]);

    return (
        <>
            {wrappedPage}
        </>
    );
};

const mapStateToProps = (state: RootState): PopupProps => {
    return {
        isPopupOpened: state.popups.isPopupOpened,
        popupName: state.popups.popupName,
        popupTitle: state.popups.popupTitle,
        popupData: state.popups.movie
    };
};

export default compose(
    connect(mapStateToProps, null),
    React.memo
)(Popups);