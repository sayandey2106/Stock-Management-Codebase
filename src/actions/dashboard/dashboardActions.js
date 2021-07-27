import {
    SET_DASHBOARD_DATA, SET_TOTAL_USERS, SET_TOTAL_CONSUMPTION, SET_CONSUMPTION_PER_DAY, SET_CONSUMPTION_PER_MONTH,
    SET_COMPANY_BALANCE, SET_CORPORATE_REQUESTS, SET_USERS_CONSUMPTION
} from "../../constants/dashboard/dashboardConstants";
import UNIVERSAL from "../../config/config";
import {setLoader, unsetLoader}
    from "../loader/loaderAction";
import {set_snack_bar} from "../snackbar/snackbar_action";
import {onLogout} from '../loginActions'



export function get_dashboard_data(id) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "qb_dashboard", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // user_token: token,
                // organization_id: oid
                company_id:id
            },
            body:JSON.stringify({
                company_id:id
            })


            // body: JSON.stringify({
            //     // email: login.email,
            //     // password: login.password
            // }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(set_dashboard_data(responseJson.result));

                    // dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    if(responseJson.message ==="User Does Not Exist"){
                        dispatch(onLogout())
                    }else {
                        dispatch(set_snack_bar(responseJson.status, responseJson.message));
                    }
                    // dispatch(set_all_category([]));
                }
                dispatch(unsetLoader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function get_total_users(id) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "total_users", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // user_token: token,
                // organization_id: oid
                company_id:id
            },
            body:JSON.stringify({
                company_id:id
            })

        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(set_total_users(responseJson.result));

                    // dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    if(responseJson.message ==="User Does Not Exist"){
                        dispatch(onLogout())
                    }else {
                        dispatch(set_snack_bar(responseJson.status, responseJson.message));
                    }
                    // dispatch(set_all_category([]));
                }
                dispatch(unsetLoader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function view_company_balance(id) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_company_balance", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // user_token: token,
                // organization_id: oid
                company_id:id
            },
            body:JSON.stringify({
                company_id:id
            })

        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(set_company_balance(responseJson.result));

                    // dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    if(responseJson.message ==="User Does Not Exist"){
                        dispatch(onLogout())
                    }else {
                        dispatch(set_snack_bar(responseJson.status, responseJson.message));
                    }
                    // dispatch(set_all_category([]));
                }
                dispatch(unsetLoader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function get_total_consumption (id) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "total_consumption ", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // user_token: token,
                // organization_id: oid
                company_id:id
            },
            body:JSON.stringify({
                company_id:id
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(set_total_consumption(responseJson.result));

                    // dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    if(responseJson.message ==="User Does Not Exist"){
                        dispatch(onLogout())
                    }else {
                        dispatch(set_snack_bar(responseJson.status, responseJson.message));
                    }
                    // dispatch(set_all_category([]));
                }
                dispatch(unsetLoader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function get_consumption_per_month(id) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "consumption_per_month", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // user_token: token,
                // organization_id: oid
                company_id:id
            },
            body:JSON.stringify({
                company_id:id
            })

        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(set_consumption_per_month(responseJson.result));

                    // dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    if(responseJson.message ==="User Does Not Exist"){
                        dispatch(onLogout())
                    }else {
                        dispatch(set_snack_bar(responseJson.status, responseJson.message));
                    }
                    // dispatch(set_all_category([]));
                }
                dispatch(unsetLoader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function get_consumption_per_day(id) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "consumption_per_day ", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // user_token: token,
                // organization_id: oid
                company_id:id
            },
            body:JSON.stringify({
                company_id:id
            })

        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(set_consumption_per_day(responseJson.result));

                    // dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    if(responseJson.message ==="User Does Not Exist"){
                        dispatch(onLogout())
                    }else {
                        dispatch(set_snack_bar(responseJson.status, responseJson.message));
                    }
                    // dispatch(set_all_category([]));
                }
                dispatch(unsetLoader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function view_corporate_requests(id) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_corporate_requests", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // user_token: token,
                // organization_id: oid
                company_id:id
            },
            body:JSON.stringify({
                company_id:id
            })

        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(set_corporate_requests(responseJson.result));

                    // dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    if(responseJson.message ==="User Does Not Exist"){
                        dispatch(onLogout())
                    }else {
                        dispatch(set_snack_bar(responseJson.status, responseJson.message));
                    }
                    // dispatch(set_all_category([]));
                }
                dispatch(unsetLoader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function view_users_consumption(id) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_users_consumption", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // user_token: token,
                // organization_id: oid
                company_id:id
            },
            body:JSON.stringify({
                company_id:id
            })

        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(set_users_consumption(responseJson.result));

                    // dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    if(responseJson.message ==="User Does Not Exist"){
                        dispatch(onLogout())
                    }else {
                        dispatch(set_snack_bar(responseJson.status, responseJson.message));
                    }
                    // dispatch(set_all_category([]));
                }
                dispatch(unsetLoader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function set_dashboard_data(payload) {
    console.log(payload)
    return {
        type: SET_DASHBOARD_DATA,
        payload: payload
    }
}
export function set_total_users(payload) {
    return {
        type: SET_TOTAL_USERS,
        payload: payload
    }
}

export function set_total_consumption(payload) {
    return {
        type: SET_TOTAL_CONSUMPTION,
        payload: payload
    }
}

export function set_consumption_per_day(payload) {
    return {
        type: SET_CONSUMPTION_PER_DAY,
        payload: payload
    }
}

export function set_consumption_per_month(payload) {
    return {
        type: SET_CONSUMPTION_PER_MONTH,
        payload: payload
    }
}

export function set_company_balance(payload) {
    return {
        type: SET_COMPANY_BALANCE,
        payload: payload
    }
}

export function set_corporate_requests(payload) {
    return {
        type: SET_CORPORATE_REQUESTS,
        payload: payload
    }
}

export function set_users_consumption(payload) {
    return {
        type: SET_USERS_CONSUMPTION,
        payload: payload
    }
}

