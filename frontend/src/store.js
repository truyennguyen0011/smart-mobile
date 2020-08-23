import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
// import { productListReducer, productDetailsReducer } from './reducers/productReducers';
import { bannerListReducer, phoneSellingListReducer, laptopSellingListReducer } from './reducers/sellingReducer';
import { productDetailsReducer, productSaveReducer ,productReviewSaveReducer, productListReducer, productDeleteReducer } from './reducers/productReducer';
import { userLoginReducer, userSignupReducer, userUpdatePasswordReducer, userUpdateInfoReducer } from './reducers/userReducer';
import { cartReducer } from './reducers/cartReducers';
import { adminLoginReducer } from './reducers/adminReducer';
import { categoryListReducer } from './reducers/categoryReducer';
import { orderCreateReducer } from './reducers/orderReducer';

const userInfo = Cookie.getJSON('userInfo') || null;
const adminInfo = Cookie.getJSON('adminInfo') || null;
// const cartItems = [];


const initialState = {
    //, shipping: {}, payment: {} 
    userLogin: { userInfo },
    adminLogin: { adminInfo },
    // cart: { cartItems }
};

const reducer = combineReducers({
    userLogin: userLoginReducer,
    adminLogin: adminLoginReducer,
    userSignup: userSignupReducer,
    bannerList: bannerListReducer,
    phoneSellingList: phoneSellingListReducer,
    laptopSellingList: laptopSellingListReducer,
    productList: productListReducer,
    categoryList: categoryListReducer,
    productDetails: productDetailsReducer,
    productSave: productSaveReducer,
    cart: cartReducer,
    productReviewSave: productReviewSaveReducer,
    userUpdPass: userUpdatePasswordReducer,
    userUpdInfo: userUpdateInfoReducer,
    productSave: productSaveReducer,
    productDelete: productDeleteReducer,
    orderCreate: orderCreateReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;