import React, {useCallback, useMemo} from 'react';
import Brand from '@components/shared/brand/Brand';
import './actionBar.scss';
import { BarActions } from "./BarActions";
import AddMovieButton from "./addMovieButton/AddMovieButton";
import BackToSearchButton from "./backToSearchButton/BackToSearchButton";
import {openPopup} from "@store/moviePopups/actions";
import {MOVIE_POPUPS_MAP} from "@store/moviePopups/types";

interface IActionBarProps {
    search: string;
    action: BarActions,
    openPopup: typeof openPopup;
}

const ActionBar: React.FC<IActionBarProps> = ({ search, action, openPopup }) => {
    const openAddMoviePopup = useCallback(() =>
        openPopup(MOVIE_POPUPS_MAP.ADD, 'ADD MOVIE'), []);
    const actionButton = useMemo(() => {
        switch (action) {
            case BarActions.ADD_MOVIE:
                return <AddMovieButton actionHandler={openAddMoviePopup}/>;
            case BarActions.BACK_TO_SEARCH:
                return <BackToSearchButton lastSearch={search}/>;
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

export default React.memo(ActionBar);
