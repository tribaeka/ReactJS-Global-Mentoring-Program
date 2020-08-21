export interface PopupState {
    isPopupOpened: boolean;
    popupName?: string;
}

const initialState = {
    isPopupOpened: false
}

type Action = {type: string, payload: string}

export const popupsReducer =
    (state: PopupState = initialState, action: Action) => {
        switch (action.type) {
            case 'OPEN_MOVIE_POPUP': {
                return { ...state, isPopupOpened: true, popupName: action.payload }
            }
            case 'CLOSE_MOVIE_POPUP': {
                return { ...state, isPopupOpened: false, popupName: undefined }
            }
            default:
                return state;
        }
    }
