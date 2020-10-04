import React, {useCallback} from "react";
import './backToSearchButton.scss';
import searchIcon from '@assets/search.png';
import {closeMovieDetails} from "@store/movieDetails/actions";

interface IBackToSearchProps {
    actionHandler: typeof closeMovieDetails
}

const BackToSearchButton: React.FC<IBackToSearchProps> = ({ actionHandler }) => {
    const closeMovieDetails = useCallback(() => actionHandler(), []);

    return (
        <img src={searchIcon}
             className="search-icon"
             onClick={closeMovieDetails}
             alt=""/>
    );
};

export default React.memo(BackToSearchButton);
