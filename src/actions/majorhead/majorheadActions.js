import {
    SET_MAJORHEAD_NAME,
    SET_ALL_MAJORHEAD
} from "../../constants/majorhead/majorheadConst";
import UNIVERSAL from "../../config/config";
import { setLoader, unsetLoader }
    from "../loader/loaderAction";
import { set_snack_bar } from "../snackbar/snackbar_action";


export function get_all_majorhead(token) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_all_majorhead", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                user_token:token,
                // organization_id:oid
            },
            // body: JSON.stringify({
            //     // email: login.email,
            //     // password: login.password
            // }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(set_all_majorhead(responseJson.result));

                    // dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                    // dispatch(set_all_majorhead([]));
                }
                dispatch(unsetLoader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function delete_majorhead(id,token) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "delete_majorhead", {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                user_token:token,
                // organization_id:oid
            },
            body: JSON.stringify({
                // email: login.email,
                // password: login.password
                majorhead_id:id
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson)
                if (responseJson.status) {

                    dispatch(get_all_majorhead(token));

                    dispatch(set_snack_bar(true, responseJson.message));

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

export function update_majorhead(id, name, token) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "update_majorhead", {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                user_token:token,
                // organization_id:oid
            },
            body: JSON.stringify({
                // email: login.email,
                // password: login.password
                majorhead_id:id,
                majorhead_name:name,
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(get_all_majorhead(token))

                    dispatch(set_snack_bar(true, responseJson.message));

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

export function add_majorhead(name, token) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "add_majorhead", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                user_token:token,
                // organization_id:oid
            },
            body: JSON.stringify({
                // email: login.email,
                // password: login.password
                majorhead_name:name,
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(get_all_majorhead(token))

                    dispatch(set_snack_bar(true, responseJson.message));

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

export function set_all_majorhead(payload){
    console.log(payload)
    return{
        type:SET_ALL_MAJORHEAD,
        payload:payload
    }
}
