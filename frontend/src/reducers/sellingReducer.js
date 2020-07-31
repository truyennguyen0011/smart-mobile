import {
    BANNER_LIST_REQUEST,
    BANNER_LIST_SUCCESS,
    BANNER_LIST_FAIL,
    PHONE_SELLING_LIST_REQUEST,
    PHONE_SELLING_LIST_SUCCESS,
    PHONE_SELLING_LIST_FAIL,
    LAPTOP_SELLING_LIST_REQUEST,
    LAPTOP_SELLING_LIST_SUCCESS,
    LAPTOP_SELLING_LIST_FAIL
} from '../constants/sellingConstants';

function bannerListReducer(state = { banners: [] }, action) {
    switch (action.type) {
        case BANNER_LIST_REQUEST:
            return { loading: true };
        case BANNER_LIST_SUCCESS:
            return { loading: false, banners: action.payload };
        case BANNER_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

function phoneSellingListReducer(state = { phoneSelling: [] }, action) {
    switch (action.type) {
        case PHONE_SELLING_LIST_REQUEST:
            return { loading: true };
        case PHONE_SELLING_LIST_SUCCESS:
            return { loading: false, phoneSelling: action.payload };
        case PHONE_SELLING_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

function laptopSellingListReducer(state = { laptopSelling: [] }, action) {
    switch (action.type) {
        case LAPTOP_SELLING_LIST_REQUEST:
            return { loading: true };
        case LAPTOP_SELLING_LIST_SUCCESS:
            return { loading: false, laptopSelling: action.payload };
        case LAPTOP_SELLING_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}


export { bannerListReducer, phoneSellingListReducer, laptopSellingListReducer };