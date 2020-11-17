import {RootState} from "../../store";
import {getFilter, getMovies, getSearch, getSortBy, getTotalAmount} from "../../selectors";
import {getMoviesList, updateFilter, updateSearch, updateSortBy} from "../../store/moviesList/actions";
import {openPopup} from "../../store/moviePopups/actions";
import {IHomeProps} from "./home/home";

export const defaultPageMapStateToProps = (state: RootState): IHomeProps => {
    return {
        headerProps: {
            search: getSearch(state)
        },
        moviesNavigationProps: {
            activeFilterOption: getFilter(state),
            activeSortByOption: getSortBy(state)
        },
        searchResultsProps: {
            movies: getMovies(state),
            sortBy: getSortBy(state),
            filter: getFilter(state),
            totalAmount: getTotalAmount(state)
        }
    }
};

export const defaultPageMapDispatchToProps = {
    getMoviesList,
    openPopup,
    updateFilter,
    updateSortBy,
    updateSearch
};
