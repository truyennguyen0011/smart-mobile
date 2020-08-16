import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
// import { productListReducer, productDetailsReducer } from './reducers/productReducers';
import { bannerListReducer, phoneSellingListReducer, laptopSellingListReducer } from './reducers/sellingReducer';
import { productDetailsReducer, productReviewSaveReducer } from './reducers/productReducer';
import { userLoginReducer, userSignupReducer } from './reducers/userReducer';
import { cartReducer } from './reducers/cartReducers';

const userInfo = Cookie.getJSON('userInfo') || null;
// const cartItems = [];


const initialState = {
    //, shipping: {}, payment: {} 
    userLogin: { userInfo },
    // cart: { cartItems }
};

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userSignup: userSignupReducer,
    bannerList: bannerListReducer,
    phoneSellingList: phoneSellingListReducer,
    laptopSellingList: laptopSellingListReducer,
    // productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    productReviewSave: productReviewSaveReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;