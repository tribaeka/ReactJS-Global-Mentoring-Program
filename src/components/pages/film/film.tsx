import React, {useMemo} from 'react';
import './film.scss';
import Popups from "@components/popups/Popups";
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
import MoviesNavigation from "@components/movies-navigation/MoviesNavigation";
import SearchResults from "@components/search-results/SearchResults";
import {compose} from "redux";
import {connect} from "react-redux";
import {IHomeProps} from "../home/home";
import {useParams} from "react-router";
import Utils from "../../Utils";
import {defaultPageMapDispatchToProps, defaultPageMapStateToProps} from "../constants";

const Film: React.FC<IHomeProps> = (
    {
        headerProps,
        moviesNavigationProps,
        searchResultsProps,
        getMoviesList,
        openPopup,
        updateFilter,
        updateSortBy
    }) => {
    const { filmId } = useParams();
    const activeFilm = useMemo(() =>
        Utils.getMovieById(searchResultsProps.movies, filmId), [searchResultsProps.movies, filmId]);
    return (
        <Popups>
            <div className="home-page">
                <Header search={headerProps.search}
                        movie={activeFilm}
                        openPopup={openPopup}/>
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
                                   openPopup={openPopup}/>
                </div>
                <Footer/>
            </div>
        </Popups>
    );
};

export default compose(
    connect(defaultPageMapStateToProps, defaultPageMapDispatchToProps),
    React.memo
)(Film);
