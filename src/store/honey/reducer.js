import {SET_HONEY, SET_HONEY_LOADING} from "./types";

const initialState = {
    isLoading: true,
    data: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HONEY: {
            return {...state, data: action.payload}
        }
        case SET_HONEY_LOADING: {
            return {...state, isLoading: action.payload}
        }
        default: {
            return state
        }
    }
}

export default reducer;