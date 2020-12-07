import {
    SET_ALL_MINORHEAD
} from "../../constants/minorheads/minorheadConstants";
import UNIVERSAL from "../../config/config";
import { setLoader, unsetLoader }
    from "../loader/loaderAction";
import { set_snack_bar } from "../snackbar/snackbar_action";


export function get_all_minorhead(token) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_all_minorheads", {
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

                    dispatch(set_all_minorhead(responseJson.result));

                    // dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                    // dispatch(set_all_minorhead([]));
                }
                dispatch(unsetLoader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function delete_minorhead(id,token) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "delete_minorhead", {
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
                minorhead_id:id
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson)
                if (responseJson.status) {

                    dispatch(get_all_minorhead(token));

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

export function update_minorhead(id, name, mid, token) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "update_minorhead", {
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
                minorhead_id:id,
                minorhead_name:name,
                majorhead_id:mid
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(get_all_minorhead(token))

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

export function add_minorhead(name, mid, token) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "add_minorhead", {
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
                minorhead_name:name,
                majorhead_id:mid
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(get_all_minorhead(token))

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

export function set_all_minorhead(payload){
    console.log(payload)
    return{
        type:SET_ALL_MINORHEAD,
        payload:payload
    }
}
