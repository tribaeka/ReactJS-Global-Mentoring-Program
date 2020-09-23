import React, { useMemo } from 'react';
import Brand from '@components/shared/brand/Brand';
import './actionBar.scss';
import { BarActions } from "./BarActions";
import AddMovieButton from "./addMovieButton/AddMovieButton";
import BackToSearchButton from "./backToSearchButton/BackToSearchButton";

interface IActionBarProps {
    action: BarActions
}

const ActionBar: React.FC<IActionBarProps> = ({ action }) => {

    const actionButton = useMemo(() => {
        switch (action) {
            case BarActions.ADD_MOVIE:
                return <AddMovieButton/>;
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
}

export default ActionBar;
