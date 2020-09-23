import React, {useCallback} from "react";
import './backToSearchButton.scss';
import {useMovieDetails} from "../../../../contexts";
import searchIcon from '@assets/search.png';

const BackToSearchButton: React.FC = () => {
    const updateMovieDetails = useMovieDetails().setMovie;
    const closeMovieDetails = useCallback(() =>
        updateMovieDetails(undefined), [updateMovieDetails]);

    return (
        <img src={searchIcon}
             className="search-icon"
             onClick={closeMovieDetails}
             alt=""/>
    );
};

export default React.memo(BackToSearchButton);