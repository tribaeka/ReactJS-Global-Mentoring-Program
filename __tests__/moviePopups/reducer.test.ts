import { moviePopupsReducer } from "../../store/moviePopups/reducer";
import { closePopup, openPopup } from "../../store/moviePopups/actions";
import { MOVIE_POPUPS_MAP } from "../../store/moviePopups/types";
import { MOVIES_ITEM_MOCK } from "../../entities/moviesItem";

test('it should test movie popups reducer', () => {
    const popupsTitle = 'EDIT MOVIE';
    const expectedStateAfterOpenPopupAction = {
        isPopupOpened: true,
        popupName: MOVIE_POPUPS_MAP.EDIT,
        popupTitle: popupsTitle,
        movie: MOVIES_ITEM_MOCK
    };
    const expectedStateAfterClosePopupAction = {
        isPopupOpened: false,
        popupName: undefined,
        popupTitle: undefined,
        movie: undefined
    };
    expect(moviePopupsReducer(
        undefined,
        openPopup(MOVIE_POPUPS_MAP.EDIT, popupsTitle, MOVIES_ITEM_MOCK))
    ).toEqual(expectedStateAfterOpenPopupAction)
    expect(moviePopupsReducer(undefined, closePopup())).toEqual(expectedStateAfterClosePopupAction);
});
