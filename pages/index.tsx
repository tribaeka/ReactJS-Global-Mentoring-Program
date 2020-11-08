import React from "react";
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
import Popups from "@components/popups/Popups";
import {openPopup} from "@store/moviePopups/actions";
import {updateFilter, updateSortBy} from "@store/moviesList/actions";
import {compose} from "redux";
import {connect} from "react-redux";
import MoviesNavigation, { IMovieNavigationProps } from "@components/movies-navigation/MoviesNavigation";
import EmptyList from "@components/empty-list/emptyList";
import { RootState } from "@store/index";
import { getFilter, getSortBy } from "@selectors/moviesList";
import styles from './Pages.module.scss';

interface IInitialPageProps {
    moviesNavigationProps: IMovieNavigationProps;
    openPopup?: typeof openPopup;
    updateFilter?: typeof updateFilter;
    updateSortBy?: typeof updateSortBy;
}

const IndexPage: React.FC<IInitialPageProps> = (
    {
        moviesNavigationProps,
        openPopup,
        updateSortBy,
        updateFilter
    }) => {
    console.log(styles);
    console.log(styles.basePage);
    return (
        <Popups>
            <div className={styles.basePage}>
                <Header openPopup={openPopup}/>
                <div className={styles.mainContainer}>
                    <MoviesNavigation activeFilterOption={moviesNavigationProps.activeFilterOption}
                                      activeSortByOption={moviesNavigationProps.activeSortByOption}
                                      updateFilter={updateFilter}
                                      updateSortBy={updateSortBy}/>
                    <EmptyList/>
                </div>
                <Footer/>
            </div>
        </Popups>
    );
};
const mapStateToProps = (state: RootState): IInitialPageProps => {
    return {
        moviesNavigationProps: {
            activeFilterOption: getFilter(state),
            activeSortByOption: getSortBy(state)
        }
    }
};
const mapDispatchToProps = {
    openPopup,
    updateFilter,
    updateSortBy
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    React.memo
)(IndexPage);
