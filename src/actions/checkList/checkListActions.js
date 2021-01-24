import {
    SET_ALL_CHECKLIST, SET_CHECKLIST_MAJORHEAD_ID, SET_CHECK_MINORHEAD_ID,
    SET_CHECKLIST_CHECKLIST,
    RESET_CHECKLIST, SET_CHECKLIST_NAME, SET_CHECKLIST_MINORHEAD_ID
} from "../../constants/checkList/checkListContants";
import UNIVERSAL from "../../config/config";
import { setLoader, unsetLoader }
    from "../loader/loaderAction";
import { set_snack_bar } from "../snackbar/snackbar_action";
import {RESET_EXECUTIVE} from "../../constants/executive/executiveConstants";
import {onLogout} from "../loginActions";


export function get_all_checkList(token, oid) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_all_checkLists", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                user_token:token,
                organization_id:oid
            },
            // body: JSON.stringify({
            //     // email: login.email,
            //     // password: login.password
            // }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(set_all_checkList(responseJson.result));

                    // dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    if(responseJson.message === "User doesn't Exist") {
                        onLogout()
                    } else {
                        dispatch(set_snack_bar(responseJson.status, responseJson.message));
                    }
                    // dispatch(set_all_checkList([]));
                }
                dispatch(unsetLoader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function update_checkList(id, client_id, firm_id, majorhead_id, minorhead_id, name, token, oid) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "update_checkList", {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                user_token:token,
                organization_id:oid
            },
            body: JSON.stringify({
                // email: login.email,
                // password: login.password
                checkList_id:id,
                checkList_name:name,
                client_id:client_id,
                firm_id:firm_id,
                majorhead_id:majorhead_id,
                minorhead_id:minorhead_id
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(get_all_checkList(token, oid))

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

export function add_checkList(checkList, token, oid) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "add_checkList", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                user_token:token,
                organization_id:oid
            },
            body: JSON.stringify({
                // email: login.email,
                // password: login.password
                checkList_id:checkList.id,
                checkList_name:checkList.name,
                client_id:checkList.client_id,
                firm_id:checkList.firm_id,
                majorhead_id:checkList.majorhead_id,
                minorhead_id:checkList.minorhead_id
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(get_all_checkList(token, oid))

                    dispatch(reset_checkList())

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

export function set_all_checkList(payload){
    console.log(payload)
    return{
        type:SET_ALL_CHECKLIST,
        payload:payload
    }
}

export function set_checkList_name(payload){
    return{
        type:SET_CHECKLIST_NAME,
        payload:payload
    }
}

export function set_checkList_majorhead_id(payload){
    return{
        type:SET_CHECKLIST_MAJORHEAD_ID,
        payload:payload
    }
}

export function set_checkList_minorhead_id(payload){
    return{
        type:SET_CHECKLIST_MINORHEAD_ID,
        payload:payload
    }
}

export function set_checkList_checkList(payload){
    return{
        type:SET_CHECKLIST_CHECKLIST,
        payload:payload
    }
}

export function reset_checkList(){
    return{
        type:RESET_CHECKLIST

    }
}
