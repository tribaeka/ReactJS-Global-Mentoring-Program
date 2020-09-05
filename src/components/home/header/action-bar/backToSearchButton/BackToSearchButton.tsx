import React from "react";
import './backToSearchButton.scss';
import {useMovieDetails} from "../../../../contexts";
import searchIcon from '@assets/search.png';

const BackToSearchButton: React.FC = () => {
    const updateMovieDetails = useMovieDetails().setMovie;

    function closeMovieDetails() {
        updateMovieDetails(undefined);
    }
    return (
        <img src={searchIcon}
             className="search-icon"
             onClick={closeMovieDetails}
             alt=""/>
    );
}

export default BackToSearchButton;