import {combineReducers} from "redux";
import honey from "./honey/reducer";
import cartedArr from "./cart/reducer";
import favoritesArr from "./favorites/reducer";
import modal from "./modal/reducer";

const reducer = combineReducers({
    honey,
    cartedArr,
    favoritesArr,
    modal
})

export default reducer;