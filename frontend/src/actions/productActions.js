import Axios from "axios";

import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_SAVE_REQUEST,
    PRODUCT_SAVE_SUCCESS,
    PRODUCT_SAVE_FAIL,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_FAIL,
    PRODUCT_REVIEW_SAVE_REQUEST,
    PRODUCT_REVIEW_SAVE_SUCCESS,
    PRODUCT_REVIEW_SAVE_FAIL
} from "../constants/productConstants";

const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST });
        const { data } = await Axios.get("/api/products");
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
    }
};

const saveProduct = (product, token) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_SAVE_REQUEST, payload: product });

        if (!product._id) {
            console.log("post");
            const { data } = await Axios.post("/api/products", product, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            });
            dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
        } else {
            console.log("put--------------------------------------------------");
            const { data } = await Axios.put("/api/products/" + product._id, product, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            });
            dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
        }
    } catch (error) {
        dispatch({ type: PRODUCT_SAVE_FAIL, payload: error.message });
    }
};

const detailsProduct = (productId) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
        const { data } = await Axios.get("/api/products/" + productId);
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
    }
};

const deleteProduct = (productId, token) => async (dispatch, getState) => {
    try {
        dispatch({ type: PRODUCT_DELETE_REQUEST, payload: productId });
        const { data } = await Axios.delete("/api/products/" + productId, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
        dispatch({ type: PRODUCT_DELETE_SUCCESS, payload: data, success: true });
    } catch (error) {
        dispatch({ type: PRODUCT_DELETE_FAIL, payload: error.message });
    }
};

const saveProductReview = (productId, reviews, token) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_REVIEW_SAVE_REQUEST, payload: reviews });
        const { data } = await Axios.post(
            `/api/products/${productId}/reviews`,
            reviews,
            {
                headers: {
                    Authorization: 'Bearer ' + token,
                },
            }
        );
        dispatch({ type: PRODUCT_REVIEW_SAVE_SUCCESS, payload: data });
    } catch (error) {
        // report error
        dispatch({ type: PRODUCT_REVIEW_SAVE_FAIL, payload: error.message });
    }
};

export { detailsProduct, saveProductReview, listProducts, saveProduct, deleteProduct };
//   saveProducts 