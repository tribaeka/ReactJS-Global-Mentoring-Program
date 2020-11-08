import React, {useCallback, useState} from 'react';
import styles from './SearchInput.module.scss';
import { updateSearch } from "@store/moviesList/actions";
import Link from "next/link";

interface ISearchInputProps {
    searchQuery?: string;
    updateSearch: typeof updateSearch;
}

const SearchInput: React.FC<ISearchInputProps> = ({ searchQuery, updateSearch }) => {
    const [ searchInputQuery, setSearchQuery ] = useState<string | undefined>(searchQuery)
    const searchChangeHandler = useCallback((event: React.SyntheticEvent<HTMLInputElement>) =>
        setSearchQuery(event.currentTarget.value), []);
    const searchUpdateHandler = useCallback(() => updateSearch(searchInputQuery), []);

    return (
        <div className={styles.searchInputContainer}>
            <span className={styles.searchHeading}>FIND YOUR MOVIE</span>
            <div className={styles.searchForm}>
                <input className={styles.searchForm}
                       value={searchInputQuery}
                       onChange={searchChangeHandler}
                       type="text"
                       placeholder="What do you want to watch?"/>
                <Link href={`/search/[searchQuery]`}
                      as={`/search/${searchInputQuery}`}>
                    <a onClick={searchUpdateHandler}
                       className={styles.searchSubmitBtn}>
                        SEARCH
                    </a>
                </Link>
            </div>
        </div>
    )
};

export default React.memo(SearchInput);
