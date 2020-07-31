import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
// import { productListReducer, productDetailsReducer } from './reducers/productReducers';
import { bannerListReducer, phoneSellingListReducer, laptopSellingListReducer } from './reducers/sellingReducer';
import { productDetailsReducer } from './reducers/productReducer';
import { userLoginReducer, userSignupReducer } from './reducers/userReducer';

const userInfo = Cookie.getJSON('userInfo') || null;


const initialState = {
    // cart: { cartItems, shipping: {}, payment: {} },
    userLogin: { userInfo },
};
console.log(initialState);
const reducer = combineReducers({
    userLogin: userLoginReducer,
    userSignup: userSignupReducer,
    bannerList: bannerListReducer,
    phoneSellingList: phoneSellingListReducer,
    laptopSellingList: laptopSellingListReducer,
    // productList: productListReducer,
    productDetails: productDetailsReducer,

})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;