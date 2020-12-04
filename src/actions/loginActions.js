import {
    LOGIN,
    LOGOUT,
    HANDLEDRAWER,
    SET_HOME,
    SET_EMAIL,
    SET_PASSWORD,
    CLEAR_LOGIN,
    
} from "../constants/ActionTypes";
import UNIVERSAL from "../config/config.js";
import { setLoader, unsetLoader }
from "./loader/loaderAction";
import { set_snack_bar } from "../actions/snackbar/snackbar_action";
import firebase from "firebase"

export function setEmail(payload) {
    return {
        type: SET_EMAIL,
        payload: payload
    };
}
export function setPwd(payload) {
    return {
        type: SET_PASSWORD,
        payload: payload
    };
}
export function login_email(login) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "login", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: login.email,
                    password: login.password
                }),
            }).then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson)
                if (responseJson.status) {
                    // if (responseJson.result.type === "A" || responseJson.result.type === "SA") {
                        dispatch(setLogin(responseJson.result))
                        // dispatch(closeLoginModal());
                    // } else {
                        dispatch(set_snack_bar(true, responseJson.message));
                    // }
                } else {
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                }
                dispatch(unsetLoader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}
export function clear_login() {
    return {
        type: CLEAR_LOGIN
    };
}
export function set_home() {
    return {
        type: SET_HOME
    }
}
export function setLogin(payload) {
    localStorage.setItem('taxopliance_type', payload.type);
    localStorage.setItem('taxopliance_token', payload.user_token);
    localStorage.setItem('taxopliance_name', payload.name);
    localStorage.setItem('taxopliance_profile_pic', payload.profile_pic);
    localStorage.setItem('taxopliance_user_id', payload._id);
    localStorage.setItem('taxopliance_organization_id', payload.organization_id);
    return {
        type: LOGIN,
        payload: payload,
    };
}

export function handleDrawerToggle(mobileOpen) {
    mobileOpen = !mobileOpen;
    return {
        type: HANDLEDRAWER,
        payload: mobileOpen
    };
}
export function onLogout() {
    return {
        type: LOGOUT
    }
}
// export function ChangepasswordFunc(newpassword, confirmpassword, token) {
//     return (dispatch) => {
//         if (newpassword === confirmpassword && newpassword !== "" && confirmpassword !== "") {
//             return fetch(UNIVERSAL.BASEURL + "v1/resetpassword", {
//                     method: "POST",
//                     headers: {
//                         Accept: "application/json",
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify({
//                         password: newpassword,
//                         token: token
//                     }),
//                 }).then((response) => response.json())
//                 .then((responseJson) => {
//                     if (responseJson.status) {
//                         dispatch(setSnackbar(responseJson.status, "Password Changed Successfully"));
//                     } else {
//                         dispatch(setSnackbar(responseJson.status, "Password could not be changed"));
//                     }
//                 })
//                 .catch((error) => {
//                     console.error(error);
//                 });
//         } else {
//             dispatch(setSnackbar(true, "password miss match"));
//         }
//     };
// }
// export function check_login_params() {
//     if (localStorage.getItem("user_token") !== null) {
//         return (dispatch) => {
//             dispatch(setLogin(localStorage.getItem("type"), localStorage.getItem("email"), localStorage.getItem("user_token"), localStorage.getItem("profile_img"), localStorage.getItem("name")))
//             if (!firebase.apps.length) {
//                 firebase.initializeApp(firebase_config);
//             }
//         }
//     }
// }

// export const openLoginModal = () => {
//     const loginStatus = localStorage.getItem("skyyrider_user_id");
//     if (loginStatus)
//         return {
//             type: CLOSE_LOGIN_MODAL
//         }
//     return {
//         type: OPEN_LOGIN_MODAL
//     }
// } 

// export const closeLoginModal = () => ({
//     type: CLOSE_LOGIN_MODAL
// })

// export const googleLogin = () => dispatch => {
//     dispatch(setLoader());
//     const provider = new firebase.auth.GoogleAuthProvider();

//     firebase.auth().signInWithPopup(provider)
//         .then(res => {
//             const user = res.user;
//             console.log(user);
//             dispatch(socialLogin(user.email, user.photoURL))
//         })
//         .catch(err => {
//             console.error(err);
//         })
// }

// export const socialLogin = (email, profilepic) => dispatch => {

//     fetch(UNIVERSAL.BASEURL + "login_social", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json"
//         },
//         body: JSON.stringify({email, profilepic})
//     })
//         .then(res => res.json())
//         .then(res => {
//             if (res.status) {
//                 dispatch(setLogin(res.result))
//                 dispatch(closeLoginModal());
//                 dispatch(set_snack_bar(true, res.message));
//             } else {
//                 dispatch(set_snack_bar(res.status, res.message));
//             }
//             dispatch(unsetLoader())
//         })
// }