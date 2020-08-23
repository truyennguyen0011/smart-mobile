import Axios from "axios";
import {
    ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_DETAILS_FAIL,
    ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_CREATE_FAIL
} from "../constants/orderConstants";

const createOrder = (order, token) => async (dispatch) => {
    try {
      dispatch({ type: ORDER_CREATE_REQUEST, payload: order });
      const { data: { data: newOrder } } = await Axios.post("/api/orders", order, {
        headers: {
          Authorization: ' Bearer ' + token
        }
      });
      dispatch({ type: ORDER_CREATE_SUCCESS, payload: newOrder });
    } catch (error) {
      dispatch({ type: ORDER_CREATE_FAIL, payload: error.message });
    }
  }

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

export { detailsOrder, createOrder };