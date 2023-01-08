import {SET_FAVORITES_ARR} from "./types";

export const setFavoritesArr = (favoritesArr) => (dispatch) => {
    dispatch({type: SET_FAVORITES_ARR, payload: favoritesArr});
}