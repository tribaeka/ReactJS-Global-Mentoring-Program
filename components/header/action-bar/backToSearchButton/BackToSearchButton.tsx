import React, { useMemo } from "react";
import styles from './BackToSearchButton.module.scss';
import Link from "next/link";

interface BackToSearchButtonProps {
    lastSearch: string
}

const BackToSearchButton: React.FC<BackToSearchButtonProps> = ({ lastSearch }) => {
    const searchIcon = '/images/search.png';
    const backHref = useMemo(() =>
        lastSearch === '' || lastSearch === undefined
            ? '/'
            : `/search/${lastSearch}`,
        [lastSearch]);
    return (
        <Link href={backHref}>
            <img src={searchIcon}
                 className={styles.searchIcon}
                 alt=""/>
        </Link>
    );
};

export default React.memo(BackToSearchButton);
