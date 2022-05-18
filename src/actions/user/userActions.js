import {
    SET_ALL_LEAD,
    SET_ALL_USER
} from "../../constants/user/userConstants";
import UNIVERSAL from "../../config/config";
import { setLoader, unsetLoader }
    from "../loader/loaderAction";
import { set_snack_bar } from "../snackbar/snackbar_action";
import { onLogout } from '../loginActions'
import { set_all_request } from "../request/requestActions";

export function get_all_users(company_id) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_all_user", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // user_token: token,
                // organization_id: oid
                // company_id:company_id,
            },
            body: JSON.stringify({
                // email: login.email,
                // password: login.password
                company_id: company_id,
                // user_id: user_id,
                // category_id:category_id
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log("User Api")
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(set_all_user(responseJson.result));

                    // dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    dispatch(set_all_user([]));

                    // dispatch(set_all_request([]));
                }
                dispatch(unsetLoader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}
export function get_user_lead(user_id) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_user_lead", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // user_token: token,
                // organization_id: oid
                // company_id:company_id,
            },
            body: JSON.stringify({
                // email: login.email,
                // password: login.password
                user_id: user_id,
                // user_id: user_id,
                // category_id:category_id
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                // console.log("User Api")
                // console.log(responseJson)
                if (responseJson.status) {

                    dispatch(set_all_lead(responseJson.result));

                    // dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    dispatch(set_all_lead([]));

                    // dispatch(set_all_request([]));
                }
                dispatch(unsetLoader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function add_users(name, email, phone, password) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "add_user", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // user_token: token,
                // organization_id: oid
                // company_id:company_id,
            },
            body: JSON.stringify({
                user_name: name,
                email: email,
                password: password,
                contact_no: phone
            }),
        }).then((response) => response.json())
            .then((responseJson) => {

                if (responseJson.status) {

                    dispatch(get_all_users());

                    dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    // dispatch(set_all_user([]));
                    dispatch(set_snack_bar(true, responseJson.message));

                    // dispatch(set_all_request([]));
                }
                dispatch(unsetLoader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function add_lead(date, time, A, B, C) {
    return (dispatch) => {
        

        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "add_lottery", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // user_token: token,
                // organization_id: oid
                // company_id:company_id,
            },
            body: JSON.stringify({
                date: date.toLocaleDateString('en-US'),
                time: time,
                A: A,
                B: B,
                C: C,
                // date: new Date().toLocaleDateString(),
                // time: new Date().toLocaleTimeString('en-US'),
            }),
        }).then((response) => response.json())
            .then((responseJson) => {

                if (responseJson.status) {

                    // dispatch(get());

                    dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    // dispatch(set_all_user([]));
                    dispatch(set_snack_bar(true, responseJson.message));

                    // dispatch(set_all_request([]));
                }
                dispatch(unsetLoader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}


export function get_today_user_lead(user_id) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_today_user_lead", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                
            },
            body: JSON.stringify({
                user_id: user_id,
                date: new Date().toLocaleDateString(),
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                
                if (responseJson.status) {

                    dispatch(set_all_lead(responseJson.result));

                    // dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    dispatch(set_all_lead([]));

                    // dispatch(set_all_request([]));
                }
                dispatch(unsetLoader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function set_all_user(payload) {
    // console.log(payload)
    return {
        type: SET_ALL_USER,
        payload: payload
    }
}
export function set_all_lead(payload) {
    // console.log(payload)
    return {
        type: SET_ALL_LEAD,
        payload: payload
    }
}
