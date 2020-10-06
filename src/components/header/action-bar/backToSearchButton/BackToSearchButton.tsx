import React from "react";
import './backToSearchButton.scss';
import searchIcon from '@assets/search.png';
import {useHistory} from "react-router";
import {Link} from "react-router-dom";

interface BackToSearchButtonProps {
    lastSearch: string
}

const BackToSearchButton: React.FC<BackToSearchButtonProps> = ({ lastSearch }) => {
    return (
        <Link to={`/search/${lastSearch}`}>
            <img src={searchIcon}
                 className="search-icon"
                 onClick={useHistory().goBack}
                 alt=""/>
        </Link>
    );
};

export default React.memo(BackToSearchButton);
