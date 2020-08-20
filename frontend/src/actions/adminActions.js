import Axios from 'axios';
import Cookie from 'js-cookie';
import {
    ADMIN_LOGIN_REQUEST, ADMIN_LOGIN_SUCCESS, ADMIN_LOGIN_FAIL,
    // ADMIN_SIGNUP_REQUEST, ADMIN_SIGNUP_SUCCESS, ADMIN_SIGNUP_FAIL,
    // ADMIN_LOGOUT, ADMIN_UPDATE_REQUEST, ADMIN_UPDATE_SUCCESS,
    // ADMIN_UPDATE_FAIL
}
    from '../constants/adminConstants';

// const updatePassword = (userId, password, token) => async (dispatch) => {
//     dispatch({ type: ADMIN_UPDATE_REQUEST, payload: { userId, password } });
//     try {
//         const { data } = await Axios.put("/api/users/" + userId + "/password",
//             { password }, {
//             headers: {
//                 Authorization: 'Bearer ' + token
//             }
//         });
//         dispatch({ type: ADMIN_UPDATE_SUCCESS, payload: data });
//         Cookie.set('userInfo', JSON.stringify(data));
//     } catch (error) {
//         dispatch({ type: ADMIN_UPDATE_FAIL, payload: error.message });
//     }
// }

// const updateInfo = (userId, fullName, email, avatar, phone, token) => async (dispatch) => {
//     dispatch({ type: ADMIN_UPDATE_REQUEST, payload: { userId, fullName, email, avatar, phone } });
//     try {
//         const { data } = await Axios.put("/api/users/" + userId + "/info",
//             { fullName, email, avatar, phone }, {
//             headers: {
//                 Authorization: 'Bearer ' + token
//             }
//         });
//         dispatch({ type: ADMIN_UPDATE_SUCCESS, payload: data });
//         Cookie.set('userInfo', JSON.stringify(data));
//     } catch (error) {
//         dispatch({ type: ADMIN_UPDATE_FAIL, payload: error.message });
//     }
// }

const loginAdmin = (email, password) => async (dispatch) => {
    dispatch({ type: ADMIN_LOGIN_REQUEST, payload: { email, password } });
    try {
        const { data } = await Axios.post("/api/admin/login", { email, password });
        dispatch({ type: ADMIN_LOGIN_SUCCESS, payload: data });
        Cookie.set('adminInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: ADMIN_LOGIN_FAIL, payload: error.message });
    }
};

// const signup = (password, fullName, email, phone, avatar) => async (dispatch) => {
//     dispatch({ type: ADMIN_SIGNUP_REQUEST, payload: { password, fullName, email, phone, avatar } });
//     try {
//         const { data } = await Axios.post(
//             "/api/users/signup",
//             {
//                 password, fullName, email, phone, avatar
//             }
//         );
//         dispatch({ type: ADMIN_SIGNUP_SUCCESS, payload: data });
//     } catch (error) {
//         dispatch({ type: ADMIN_SIGNUP_FAIL, payload: error.message });
//     }
// };

// const logout = () => (dispatch) => {
//     Cookie.remove("userInfo");
//     Cookie.remove("cartItems");
//     dispatch({ type: ADMIN_LOGOUT })
// }

export { loginAdmin, }; //signup, logout, updatePassword, updateInfo