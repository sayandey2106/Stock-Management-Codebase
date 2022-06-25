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
import firebase from "firebase";
import { view_profile } from "./profile/profileAction";


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
        return fetch(UNIVERSAL.BASEURL + "api/Sauth/login_email", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // user_token: token,
                // organization_id: oid
                // company_id:id
            },
            body: JSON.stringify({
             email :login.email,
            password : login.password
        
             }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(setLogin(responseJson))
               
                        dispatch(view_profile(responseJson.authToken));
                        console.log(responseJson);
                    // dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    
                    dispatch(set_snack_bar(true, responseJson.message));
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
    };
}
export function setLogin(payload) {
    localStorage.setItem('sre_type', payload.type);
    // localStorage.setItem('qubi7_token', payload.user_token);
    localStorage.setItem('sre_name', payload.name);
    localStorage.setItem('sre_email', payload.email);
   
    // localStorage.setItem('sre_profile_pic', payload.profile_pic);
    localStorage.setItem('sre_user_id', payload.authToken);
    // localStorage.setItem('qubi7_company_id', payload.company_id);
    // localStorage.setItem('taxopliance_organization_id', payload.organization_id);
  
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



// if (login.email === "nepal" && login.password === "delhisatta") {
    
    
//     // if (responseJson.result.type === "A" || responseJson.result.type === "SA") {
//             dispatch(setLogin({type:'A',name:"nepal",_id:"7678676876"}))
//             // dispatch(closeLoginModal());
//             // } else {
//             dispatch(set_snack_bar(true,"Login Successful"));
//         }

//         // }

//         dispatch(unsetLoader())

//     };

