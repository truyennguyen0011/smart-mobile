import Axios from "axios";
import {
    ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_DETAILS_FAIL
} from "../constants/orderConstants";

const detailsOrder = (prdID, userID, prdImage, prdName, qty, price, priceTotal) => async (dispatch) => {
    dispatch({ type: ORDER_DETAILS_REQUEST, payload: { prdID, userID, prdImage, prdName, qty, price, priceTotal } });
    try {
        const { data } = await Axios.post(
            "/api/orderdetails",
            {
                prdID, userID, prdImage, prdName, qty, price, priceTotal
            }
        );
        dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: ORDER_DETAILS_FAIL, payload: error.message });
    }
};

export { detailsOrder };