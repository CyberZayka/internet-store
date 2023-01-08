import {SET_HONEY, SET_HONEY_LOADING} from "./types";

export const setHoney = (honeyArr) => (dispatch) => {
    dispatch({type: SET_HONEY, payload: honeyArr});
}

export const setHoneyLoading = (isLoading) => (dispatch) => {
    dispatch({type: SET_HONEY_LOADING, payload: isLoading});
}