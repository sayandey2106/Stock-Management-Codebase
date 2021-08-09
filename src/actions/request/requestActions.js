import {
    SET_ALL_REQUEST
} from "../../constants/request/requestConstants";
import UNIVERSAL from "../../config/config";
import {setLoader, unsetLoader}
    from "../loader/loaderAction";
import {set_snack_bar} from "../snackbar/snackbar_action";
import {onLogout} from '../loginActions'
import {get_total_users, set_users_consumption, view_users_consumption} from "../dashboard/dashboardActions"


export function get_all_request(id) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_corporate_requests", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                company_id:id
                // user_token: token,
                // organization_id: oid
            },
            /*body: JSON.stringify({
                // email: login.email,
                // password: login.password
            }),*/
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
                    dispatch(set_all_request([]));
                }
                dispatch(unsetLoader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function get_all_request_fix(id) {
    return (dispatch) => {
        // dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_corporate_requests", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                company_id:id
                // user_token: token,
                // organization_id: oid
            },
            /*body: JSON.stringify({
                // email: login.email,
                // password: login.password
            }),*/
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
                    dispatch(set_all_request([]));
                }
                dispatch(unsetLoader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function delete_request(id, cid) {
    console.log("testing user id, delete api", id, cid)
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "remove_corporate_user", {
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
                user_id: id
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    // dispatch(view_users_consumption(cid))
                    dispatch(get_total_users(cid))

                    // dispatch(set_users_consumption(cid))

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

export function update_request(user_id, name,corp_id ) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "send_corporate_request", {
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
                // request_name: name,
                // request_quantity:quantity,
                userId: user_id,
                user_name: name,
                corporate_id: corp_id,

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

export function approve_corporate_request(user_id, company_id, category_id, e_id) {
    return (dispatch) => {
        dispatch(setLoader());
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
                category_id: category_id,
                employeeId: e_id
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(get_all_request_fix(company_id))

                    // dispatch(reset_request())

                    dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    if(responseJson.message === "User doesn't Exist") {
                        onLogout()
                    } else {
                        dispatch(set_snack_bar(responseJson.status, responseJson.message));
                    }
                }
                // dispatch(unsetLoader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function disapprove_corporate_request(user_id, company_id) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "disapprove_corporate_request", {
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
                /*company_id: company_id,
                category_id: category_id,
                employeeId: e_id*/
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(get_all_request_fix(company_id))

                    // dispatch(reset_request())

                    dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    if(responseJson.message === "User doesn't Exist") {
                        onLogout()
                    } else {
                        dispatch(set_snack_bar(responseJson.status, responseJson.message));
                    }
                }
                // dispatch(unsetLoader())
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
