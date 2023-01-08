import {setCartedArr} from "./actions";
import storage from "../../services/LocalStorage/LocalStorage";

export const clearCart = () => (dispatch) => {
    dispatch(setCartedArr([]));
    storage.clear("addedToCart");
}