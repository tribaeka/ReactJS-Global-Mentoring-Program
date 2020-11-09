import React, {useMemo} from 'react';
import Popups from "@components/popups/Popups";
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
import MoviesNavigation from "@components/movies-navigation/MoviesNavigation";
import SearchResults from "@components/search-results/SearchResults";
import {compose} from "redux";
import {connect} from "react-redux";
import Utils from "@components/Utils";
import { defaultPageMapDispatchToProps, defaultPageMapStateToProps } from "../constants";
import { IPageProps } from "../search/[searchQuery]";
import { NextRouter, useRouter } from "next/router";
import styles from '../Pages.module.scss';
import PageLayout from "@components/pageLayout/PageLayout";

interface IFilmPageRouter extends NextRouter {
    query: {
        filmId?: string;
    }
}

const FilmPage: React.FC<IPageProps> = (
    {
        headerProps,
        moviesNavigationProps,
        searchResultsProps,
        getMoviesList,
        openPopup,
        updateFilter,
        updateSortBy,
        updateSearch
    }) => {
    const router: IFilmPageRouter = useRouter();
    const activeFilm = useMemo(
        () => Utils.getMovieById(searchResultsProps.movies, router.query.filmId),
        [searchResultsProps.movies, router.query.filmId]
    );
    return (
        <PageLayout title={'Film page'}>
            <Popups>
                <div className={styles.basePage}>
                    <Header storedSearch={headerProps.storedSearch}
                            movie={activeFilm}
                            openPopup={openPopup}/>
                    <div className={styles.mainContainer}>
                        <MoviesNavigation activeFilterOption={moviesNavigationProps.activeFilterOption}
                                          activeSortByOption={moviesNavigationProps.activeSortByOption}
                                          updateFilter={updateFilter}
                                          updateSortBy={updateSortBy}/>
                        <SearchResults movies={[...searchResultsProps.movies]}
                                       filter={searchResultsProps.filter}
                                       sortBy={searchResultsProps.sortBy}
                                       totalAmount={searchResultsProps.totalAmount}
                                       getMoviesList={getMoviesList}
                                       openPopup={openPopup}
                                       updateSearch={updateSearch}/>
                    </div>
                    <Footer/>
                </div>
            </Popups>
        </PageLayout>
    );
};

export default compose(
    connect(defaultPageMapStateToProps, defaultPageMapDispatchToProps),
    React.memo
)(FilmPage);
