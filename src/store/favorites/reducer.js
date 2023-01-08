import storage from "../../services/LocalStorage/LocalStorage";
import {SET_FAVORITES_ARR} from "./types";

const initialState = storage.favorites || [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FAVORITES_ARR: {
            return action.payload
        }
        default: {
            return state
        }
    }
}

export default reducer;