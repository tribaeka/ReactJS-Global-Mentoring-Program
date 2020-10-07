import React from "react";
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
import Popups from "@components/popups/Popups";
import MoviesNavigation, {IMovieNavigationProps} from "../../movies-navigation/MoviesNavigation";
import EmptyList from "../../empty-list/emptyList";
import {openPopup} from "../../../store/moviePopups/actions";
import {compose} from "redux";
import {connect} from "react-redux";
import {RootState} from "../../../store";
import {getFilter, getSortBy} from "../../../selectors";
import {updateFilter, updateSortBy} from "../../../store/moviesList/actions";

interface IInitialPageProps {
    moviesNavigationProps: IMovieNavigationProps;
    openPopup?: typeof openPopup;
    updateFilter?: typeof updateFilter;
    updateSortBy?: typeof updateSortBy;
}

const Initial: React.FC<IInitialPageProps> = (
    {
        moviesNavigationProps,
        openPopup,
        updateSortBy,
        updateFilter
    }) => {
    return (
        <Popups>
            <div className="base-page">
                <Header openPopup={openPopup}/>
                <div className="main-container">
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
)(Initial);
