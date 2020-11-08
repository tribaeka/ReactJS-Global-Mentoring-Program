import React from 'react';
import Popups from "@components/popups/Popups";
import Header, {IHeaderProps} from "@components/header/Header";
import Footer from "@components/footer/Footer";
import MoviesNavigation, {IMovieNavigationProps} from "@components/movies-navigation/MoviesNavigation";
import SearchResults, {ISearchResultsProps} from "@components/search-results/SearchResults";
import {getMoviesList, updateFilter, updateSearch, updateSortBy} from "@store/moviesList/actions";
import {compose} from "redux";
import {connect} from "react-redux";
import {openPopup} from "@store/moviePopups/actions";
import { defaultPageMapDispatchToProps, defaultPageMapStateToProps } from "../constants";
import { NextRouter, useRouter } from "next/router";

export interface IPageProps {
    headerProps: IHeaderProps;
    moviesNavigationProps: IMovieNavigationProps;
    searchResultsProps: ISearchResultsProps;
    getMoviesList?: typeof getMoviesList;
    openPopup?: typeof openPopup;
    updateFilter?: typeof updateFilter;
    updateSortBy?: typeof updateSortBy;
    updateSearch?: typeof updateSearch;
}

interface ISearchPageRouter extends NextRouter {
    query: {
        searchQuery?: string;
    }
}

const SearchPage: React.FC<IPageProps> = (
    {
        moviesNavigationProps,
        searchResultsProps,
        getMoviesList,
        openPopup,
        updateFilter,
        updateSortBy,
        updateSearch
    }) => {
    const router: ISearchPageRouter = useRouter();
    return (
        <Popups>
            <div className="base-page">
                <Header openPopup={openPopup}
                        searchQuery={router.query.searchQuery}/>
                <div className="main-container">
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
    );
};


export default compose(
    connect(defaultPageMapStateToProps, defaultPageMapDispatchToProps),
    React.memo
)(SearchPage);
