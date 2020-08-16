import Axios from "axios";
import { CART_ADD_ITEM, CART_GET_ITEM, CART_REMOVE_ITEM, CART_PUT_ITEM } from "../constants/cartConstants";

const addToCart = (prdID, userID, prdImage, prdName, qty, price, priceTotal) => async (dispatch, getState) => {
  try {
    const { data } = await Axios.post(
      "/api/orderdetails",
      {
        prdID, userID, prdImage, prdName, qty, price, priceTotal
      }
    );
    dispatch({
      type: CART_ADD_ITEM, payload: data
    });

  } catch (error) {

  }
}

const putToCart = (id, qty) => async (dispatch) => {
  try {
    const { data } = await Axios.put(
      "/api/orderdetails",
      {
        id, qty
      }
    );
    dispatch({
      type: CART_PUT_ITEM, payload: data
    });

  } catch (error) {
    console.log(error);
  }
}
const getToCart = (userID) => async (dispatch) => {
  try {
    const { data } = await Axios.get("/api/orderdetails/" + userID);
    dispatch({ type: CART_GET_ITEM, payload: data });
  } catch (error) {
    console.log(error);
  }
}

const removeFromCart = (id) => async (dispatch) => {
  try {
    const { data } = await Axios.delete(
      "/api/orderdetails/" + id
    );
    dispatch({
      type: CART_REMOVE_ITEM, payload: id
    });
  } catch (error) {
    console.log(error);
  }
}
// const saveShipping = (data) => (dispatch) => {
//   dispatch({ type: CART_SAVE_SHIPPING, payload: data });
// }
// const savePayment = (data) => (dispatch) => {
//   dispatch({ type: CART_SAVE_PAYMENT, payload: data });
// }
export { addToCart, getToCart, putToCart, removeFromCart }