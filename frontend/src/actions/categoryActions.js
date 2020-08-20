import Axios from "axios";

import {
    CATEGORY_LIST_REQUEST,
    CATEGORY_LIST_SUCCESS,
    CATEGORY_LIST_FAIL,
} from "../constants/categoryConstants";

const listCategories = () => async (dispatch) => {
    try {
        dispatch({ type: CATEGORY_LIST_REQUEST });
        const { data } = await Axios.get("/api/categories");
        dispatch({ type: CATEGORY_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: CATEGORY_LIST_FAIL, payload: error.message });
    }
};

// const saveProducts = (product) => async (dispatch, getState) => {
//     try {
//         dispatch({ type: PRODUCT_SAVE_REQUEST, payload: product });
//         const { userSignin: { userInfo } } = getState();

//         if (!product._id) {
//             const { data } = await Axios.post("/api/products", product, {
//                 headers: {
//                     Authorization: 'Bearer ' + userInfo.token
//                 }
//             });
//             dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
//         } else {
//             const { data } = await Axios.put("/api/products/" + product._id, product, {
//                 headers: {
//                     Authorization: 'Bearer ' + userInfo.token
//                 }
//             });
//             dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
//         }
//     } catch (error) {
//         dispatch({ type: PRODUCT_SAVE_FAIL, payload: error.message });
//     }
// };

// const detailsProduct = (productId) => async (dispatch) => {
//     try {
//         dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
//         const { data } = await Axios.get("/api/products/" + productId);
//         dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
//     } catch (error) {
//         dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
//     }
// };

// const deleteProduct = (productId) => async (dispatch, getState) => {
//     try {
//         const { userSignin: { userInfo } } = getState();
//         dispatch({ type: PRODUCT_DELETE_REQUEST, payload: productId });
//         const { data } = await Axios.delete("/api/products/" + productId, {
//             headers: {
//                 Authorization: 'Bearer ' + userInfo.token
//             }
//         });
//         dispatch({ type: PRODUCT_DELETE_SUCCESS, payload: data, success: true });
//     } catch (error) {
//         dispatch({ type: PRODUCT_DELETE_FAIL, payload: error.message });
//     }
// };

// const saveProductReview = (productId, reviews, token) => async (dispatch) => {
//     try {
//         dispatch({ type: PRODUCT_REVIEW_SAVE_REQUEST, payload: reviews });
//         const { data } = await Axios.post(
//             `/api/products/${productId}/reviews`,
//             reviews,
//             {
//                 headers: {
//                     Authorization: 'Bearer ' + token,
//                 },
//             }
//         );
//         dispatch({ type: PRODUCT_REVIEW_SAVE_SUCCESS, payload: data });
//     } catch (error) {
//         // report error
//         dispatch({ type: PRODUCT_REVIEW_SAVE_FAIL, payload: error.message });
//     }
// };

export { listCategories };
//   saveProducts deleteProduct detailsProduct, saveProductReview, 