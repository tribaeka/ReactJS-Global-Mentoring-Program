import { shallow } from "enzyme";
import configureStore from "redux-mock-store";
import AddMoviePopup from "../components/popups/movie-popup/add-movie-popup/AddMoviePopup";
import React from "react";
import { MOVIE_POPUPS_MAP } from "../store/moviePopups/types";
import { MOVIES_ITEM_MOCK } from "../entities/moviesItem";
import { Provider } from "react-redux";

const mockStore = configureStore([]);
const addMoviePopupTitle = 'ADD MOVIE';

describe('it should test Add movie modal dialog', () => {
    let store;
    let component;

    beforeEach(() => {
        store = mockStore({
            isPopupOpened: true,
            popupName: MOVIE_POPUPS_MAP.ADD,
            popupTitle: addMoviePopupTitle,
            movie: MOVIES_ITEM_MOCK
        });
        component = shallow(
            <Provider store={store}>
                <AddMoviePopup title={addMoviePopupTitle}/>
            </Provider>
        )
    });

    it('should render with given state from store', () => {
        expect(component).toMatchSnapshot();
    });

});
