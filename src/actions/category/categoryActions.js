import {
    SET_ALL_CATEGORY, SET_CATEGORY_LIST
} from "../../constants/category/categoryConstants";
import UNIVERSAL from "../../config/config";
import {setLoader, unsetLoader}
    from "../loader/loaderAction";
import {set_snack_bar} from "../snackbar/snackbar_action";
import {onLogout} from '../loginActions'
import {get_total_users} from '../dashboard/dashboardActions'


export function get_all_category(id) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_company_category", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // user_token: token,
                // organization_id: oid
                company_id:id
            },
            //body: JSON.stringify({
                // email: login.email,
               // password: login.password
        
             //}),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(set_all_category(responseJson.result));
                    const object = responseJson.result.reduce((obj, item) => (obj[item._id] = item.name, obj), {});
                    dispatch(set_category_list(object));

                    // dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    if(responseJson.message ==="User Does Not Exist"){
                        dispatch(onLogout())
                    }else {
                        dispatch(set_snack_bar(responseJson.status, responseJson.message));
                    }
                    // dispatch(set_all_category([]));
                    // dispatch(set_category_list({}));
                }
                dispatch(unsetLoader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function get_all_category_fix(id) {
    return (dispatch) => {
        // dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_company_category", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // user_token: token,
                // organization_id: oid
                company_id:id
            },
            //body: JSON.stringify({
            // email: login.email,
            // password: login.password

            //}),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(set_all_category(responseJson.result));

                    // dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    if(responseJson.message ==="User Does Not Exist"){
                        dispatch(onLogout())
                    }else {
                        dispatch(set_all_category([]));
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

export function delete_category(id,company_id) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "delete_category", {
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
                id: id
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(get_all_category_fix(company_id))

                    dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    if(responseJson.message === "User doesn't Exist") {
                        dispatch(onLogout())
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

export function update_category(id, cid, name, quantity) {
    console.log("kyun nahin ho raha", quantity)
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "update_category", {
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
                company_id:cid,
                category_name: name,
                category_quantity:quantity,
                id: id

            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(get_all_category_fix(cid))

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

export function change_category(company_id, user_id, employeeId, user_name, new_category) {
    // console.log("kyun nahin ho raha", quantity)
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "update_corporate_user", {
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
                new_category: new_category,
                employeeId: employeeId,
                user_name: user_name,

            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(get_total_users(company_id))

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


export function add_category(name, quantity,company_id) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "add_category", {
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
                category_name: name,
                category_quantity:quantity,
                company_id:company_id
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(get_all_category(company_id))

                    // dispatch(reset_category())

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

export function set_all_category(payload) {
    console.log(payload)
    return {
        type: SET_ALL_CATEGORY,
        payload: payload
    }
}

export function set_category_list(payload) {
    return {
        type: SET_CATEGORY_LIST,
        payload: payload
    }
}