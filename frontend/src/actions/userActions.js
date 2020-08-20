import Axios from 'axios';
import Cookie from 'js-cookie';
import {
    USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL,
    USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS, USER_SIGNUP_FAIL,
    USER_LOGOUT, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS,
    USER_UPDATE_FAIL
}
    from '../constants/userConstants';

const updatePassword = (userId, password, token) => async (dispatch) => {
    dispatch({ type: USER_UPDATE_REQUEST, payload: { userId, password } });
    try {
        const { data } = await Axios.put("/api/users/" + userId + "/password",
            { password }, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
        dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
        Cookie.set('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: USER_UPDATE_FAIL, payload: error.message });
    }
}

const updateInfo = (userId, fullName, email, avatar, phone, token) => async (dispatch) => {
    dispatch({ type: USER_UPDATE_REQUEST, payload: { userId, fullName, email, avatar, phone } });
    try {
        const { data } = await Axios.put("/api/users/" + userId + "/info",
            { fullName, email, avatar, phone }, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
        dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
        Cookie.set('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: USER_UPDATE_FAIL, payload: error.message });
    }
}

const login = (email, password) => async (dispatch) => {
    dispatch({ type: USER_LOGIN_REQUEST, payload: { email, password } });
    try {
        const { data } = await Axios.post("/api/users/login", { email, password });
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
        Cookie.set('userInfo', JSON.stringify(data), { expires: 7 });
    } catch (error) {
        dispatch({ type: USER_LOGIN_FAIL, payload: error.message });
    }
};

const signup = (password, fullName, email, phone, avatar) => async (dispatch) => {
    dispatch({ type: USER_SIGNUP_REQUEST, payload: { password, fullName, email, phone, avatar } });
    try {
        const { data } = await Axios.post(
            "/api/users/signup",
            {
                password, fullName, email, phone, avatar
            }
        );
        dispatch({ type: USER_SIGNUP_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: USER_SIGNUP_FAIL, payload: error.message });
    }
};

const logout = () => (dispatch) => {
    Cookie.remove("userInfo");
    Cookie.remove("cartItems");
    dispatch({ type: USER_LOGOUT })
}

export { login, signup, logout, updatePassword, updateInfo };