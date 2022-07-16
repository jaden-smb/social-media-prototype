import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const getPost = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPost();
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};