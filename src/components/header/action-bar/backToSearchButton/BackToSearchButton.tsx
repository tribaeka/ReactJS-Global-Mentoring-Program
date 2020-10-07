import React, {useMemo} from "react";
import './backToSearchButton.scss';
import searchIcon from '@assets/search.png';
import {Link} from "react-router-dom";

interface BackToSearchButtonProps {
    lastSearch: string
}

const BackToSearchButton: React.FC<BackToSearchButtonProps> = ({ lastSearch }) => {
    const backHref = useMemo(() =>
        lastSearch === '' || lastSearch === undefined
            ? '/'
            : `/search/${lastSearch}`,
        [lastSearch]);
    return (
        <Link to={backHref}>
            <img src={searchIcon}
                 className="search-icon"
                 alt=""/>
        </Link>
    );
};

export default React.memo(BackToSearchButton);
