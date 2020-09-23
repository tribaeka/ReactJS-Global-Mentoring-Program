import React, {useCallback, useMemo} from 'react';
import Brand from '@components/shared/brand/Brand';
import './actionBar.scss';
import { BarActions } from "./BarActions";
import AddMovieButton from "./addMovieButton/AddMovieButton";
import BackToSearchButton from "./backToSearchButton/BackToSearchButton";
import {compose} from "redux";
import {connect} from "react-redux";
import {openPopup} from "../../../../store/moviePopups/actions";
import {IMoviesItem} from "../../main/search-results/movies-list/IMoviesItem";
import {MOVIE_POPUPS_MAP} from "../../../../store/moviePopups/types";

interface IActionBarProps {
    action: BarActions,
    openPopup(name: string, title: string, movie?: IMoviesItem): void;
}

const ActionBar: React.FC<IActionBarProps> = ({ action, openPopup }) => {
    const openAddMoviePopup = useCallback(() =>
        openPopup(MOVIE_POPUPS_MAP.ADD, 'ADD MOVIE'), []);
    const actionButton = useMemo(() => {
        switch (action) {
            case BarActions.ADD_MOVIE:
                return <AddMovieButton openPopupHandler={openAddMoviePopup}/>;
            case BarActions.BACK_TO_SEARCH:
                return <BackToSearchButton/>;
            default:
                return;

        }
    }, [action]);

    return (
        <div className="action-bar-container">
            <Brand/>
            {actionButton}
        </div>
    );
};

const mapDispatchToProps = { openPopup };

export default compose(
    connect(null, mapDispatchToProps),
    React.memo
)(ActionBar);
