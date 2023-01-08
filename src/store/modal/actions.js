import {SET_MODAL_VISIBLE, SET_MODAL_HEADER, SET_MODAL_ID} from "./types";

export const setModalVisible = (isVisible) => (dispatch) => {
    dispatch({type: SET_MODAL_VISIBLE, payload: isVisible});
}

export const setModalHeader = (headerText) => (dispatch) => {
    dispatch({type: SET_MODAL_HEADER, payload: headerText});
}

export const setModalId = (modalId) => (dispatch) => {
    dispatch({type: SET_MODAL_ID, payload: modalId});
}


