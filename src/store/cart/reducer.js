import storage from "../../services/LocalStorage/LocalStorage";
import {SET_CARTED_ARR} from "./types";

const initialState = storage.addedToCart || [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CARTED_ARR: {
            return action.payload
        }
        default: {
            return state
        }
    }
}

export default reducer;