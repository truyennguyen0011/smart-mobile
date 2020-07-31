import axios from "axios";

const {
    BANNER_LIST_REQUEST,
    BANNER_LIST_SUCCESS,
    BANNER_LIST_FAIL,
    PHONE_SELLING_LIST_REQUEST,
    PHONE_SELLING_LIST_SUCCESS,
    PHONE_SELLING_LIST_FAIL,
    LAPTOP_SELLING_LIST_REQUEST,
    LAPTOP_SELLING_LIST_SUCCESS,
    LAPTOP_SELLING_LIST_FAIL
} = require("../constants/sellingConstants");

const listBanners = () => async (dispatch) => {
    try {
        dispatch({ type: BANNER_LIST_REQUEST });
        const { data } = await axios.get("/api/getBestSellingBanner");
        dispatch({ type: BANNER_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: BANNER_LIST_FAIL, payload: error.message });
    }
};

const listSellingPhones = () => async (dispatch) => {
    try {
        dispatch({ type: PHONE_SELLING_LIST_REQUEST });
        const { data } = await axios.get("/api/getBestSellingPhone");
        dispatch({ type: PHONE_SELLING_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: PHONE_SELLING_LIST_FAIL, payload: error.message });
    }
};

const listSellingLaptops = () => async (dispatch) => {
    try {
        dispatch({ type: LAPTOP_SELLING_LIST_REQUEST });
        const { data } = await axios.get("/api/getBestSellingLaptop");
        dispatch({ type: LAPTOP_SELLING_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: LAPTOP_SELLING_LIST_FAIL, payload: error.message });
    }
};


export { listBanners, listSellingPhones, listSellingLaptops };