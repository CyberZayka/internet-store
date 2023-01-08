import {SET_MODAL_HEADER, SET_MODAL_ID, SET_MODAL_VISIBLE} from "./types";

const initialState = {
    isVisible: false,
    header: "",
    cardId: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MODAL_VISIBLE: {
            return {...state, isVisible: action.payload}
        }
        case SET_MODAL_HEADER: {
            return {...state, header: action.payload}
        }
        case SET_MODAL_ID: {
            return {...state, cardId: action.payload}
        }
        default: {
            return state
        }
    }
}

export default reducer;