import {
    SET_ALL_REQUEST
} from "../../constants/request/requestConstants";
import UNIVERSAL from "../../config/config";
import {setLoader, unsetLoader}
    from "../loader/loaderAction";
import {set_snack_bar} from "../snackbar/snackbar_action";
import {onLogout} from '../loginActions'


export function get_all_request(id) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_corporate_requests", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // user_token: token,
                // organization_id: oid
            },
            body: JSON.stringify({
                // email: login.email,
                // password: login.password
                company_id:id
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(set_all_request(responseJson.result));

                    // dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    if(responseJson.message ==="User Does Not Exist"){
                        dispatch(onLogout())
                    }else {
                        dispatch(set_snack_bar(responseJson.status, responseJson.message));
                    }
                    // dispatch(set_all_request([]));
                }
                dispatch(unsetLoader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function delete_request(id) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "delete_request", {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // user_token: token,
                // organization_id: oid
            },
            body: JSON.stringify({
                // email: login.email,
                // password: login.password
                request_id: id
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(get_all_request())

                    dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    if(responseJson.message === "User doesn't Exist") {
                        onLogout()
                    } else {
                        dispatch(set_snack_bar(responseJson.status, responseJson.message));
                    }
                }
                dispatch(unsetLoader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function update_request(id, name, quantity) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "update_request", {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // user_token: token,
                // organization_id: oid
            },
            body: JSON.stringify({
                // email: login.email,
                // password: login.password
                request_name: name,
                request_quantity:quantity,

            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(get_all_request())

                    dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    if(responseJson.message === "User doesn't Exist") {
                        onLogout()
                    } else {
                        dispatch(set_snack_bar(responseJson.status, responseJson.message));
                    }
                }
                dispatch(unsetLoader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function add_request(name, quantity) {
    return (dispatch) => {
        // dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "add_request", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // user_token: token,
                // organization_id: oid
            },
            body: JSON.stringify({
                // email: login.email,
                // password: login.password
                request_name: name,
                request_quantity:quantity,
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(get_all_request())

                    // dispatch(reset_request())

                    dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    if(responseJson.message === "User doesn't Exist") {
                        onLogout()
                    } else {
                        dispatch(set_snack_bar(responseJson.status, responseJson.message));
                    }
                }
                dispatch(unsetLoader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function approve_corporate_request(user_id, company_id, category_id) {
    return (dispatch) => {
        // dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "approve_corporate_request", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // user_token: token,
                // organization_id: oid
            },
            body: JSON.stringify({
                // email: login.email,
                // password: login.password
                user_id: user_id,
                company_id: company_id,
                category_id: category_id
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(get_all_request())

                    // dispatch(reset_request())

                    dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    if(responseJson.message === "User doesn't Exist") {
                        onLogout()
                    } else {
                        dispatch(set_snack_bar(responseJson.status, responseJson.message));
                    }
                }
                dispatch(unsetLoader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function set_all_request(payload) {
    console.log(payload)
    return {
        type: SET_ALL_REQUEST,
        payload: payload
    }
}
