import {
    ADMIN_LOGIN_REQUEST, ADMIN_LOGIN_SUCCESS, ADMIN_LOGIN_FAIL,
    // USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS, USER_SIGNUP_FAIL, USER_LOGOUT,
    // USER_UPDATE_REQUEST, USER_UPDATE_FAIL, USER_UPDATE_SUCCESS
}
    from '../constants/adminConstants';

function adminLoginReducer(state = {}, action) {
    switch (action.type) {
        case ADMIN_LOGIN_REQUEST:
            return { loading: true };
        case ADMIN_LOGIN_SUCCESS:
            return { loading: false, adminInfo: action.payload };
        case ADMIN_LOGIN_FAIL:
            return { loading: false, error: action.payload };
        // case USER_LOGOUT:
        //     return {};
        default:
            return state;
    }
}

// function userSignupReducer(state = {}, action) {
//     switch (action.type) {
//         case USER_SIGNUP_REQUEST:
//             return { loading: true };
//         case USER_SIGNUP_SUCCESS:
//             return { loading: false, userInfo: action.payload };
//         case USER_SIGNUP_FAIL:
//             return { loading: false, error: action.payload };

//         default:
//             return state;
//     }
// }

// function userUpdatePasswordReducer(state = {}, action) {
//     switch (action.type) {
//         case USER_UPDATE_REQUEST:
//             return { loading: true };
//         case USER_UPDATE_SUCCESS:
//             return { loading: false, userInfo: action.payload };
//         case USER_UPDATE_FAIL:
//             return { loading: false, error: action.payload };
//         default: return state;
//     }
// }

// function userUpdateInfoReducer(state = {}, action) {
//     switch (action.type) {
//         case USER_UPDATE_REQUEST:
//             return { loading: true };
//         case USER_UPDATE_SUCCESS:
//             return { loading: false, userInfo: action.payload };
//         case USER_UPDATE_FAIL:
//             return { loading: false, error: action.payload };
//         default: return state;
//     }
// }

export { adminLoginReducer };
//, userSignupReducer, userUpdatePasswordReducer, userUpdateInfoReducer