import {RootState} from "@store/index";
import {getFilter, getMovies, getSearch, getSortBy, getTotalAmount} from "@selectors/index";
import {getMoviesList, updateFilter, updateSearch, updateSortBy} from "@store/moviesList/actions";
import {openPopup} from "@store/moviePopups/actions";
import { IPageProps } from "./search/[searchQuery]";

export const defaultPageMapStateToProps = (state: RootState): IPageProps => {
    return {
        headerProps: {
            storedSearch: getSearch(state)
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
