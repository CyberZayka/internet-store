import API from "../../services/API/API";
import {setHoney, setHoneyLoading} from "./actions";

export const getHoney = () => (dispatch) => {
    dispatch(setHoneyLoading(true));
    API.getHoneyList().then(res => {
        dispatch(setHoney(res.data))
        dispatch(setHoneyLoading(false))
    });
}