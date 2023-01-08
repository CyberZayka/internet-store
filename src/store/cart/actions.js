import {SET_CARTED_ARR} from "./types";

export const setCartedArr = (cartedArr) => (dispatch) => {
    dispatch({type: SET_CARTED_ARR, payload: cartedArr});
}