import {
    SET_JOBCARD_NAME,
    SET_ALL_JOBCARD, SET_JOBCARD_CLIENT_ID, SET_JOBCARD_FIRM_ID, SET_JOBCARD_MAJORHEAD_ID, SET_JOBCARD_MINORHEAD_ID,
    RESET_JOBCARD
} from "../../constants/jobcard/jobcardConstants";
import UNIVERSAL from "../../config/config";
import { setLoader, unsetLoader }
    from "../loader/loaderAction";
import { set_snack_bar } from "../snackbar/snackbar_action";
import {RESET_EXECUTIVE} from "../../constants/executive/executiveConstants";


export function get_all_jobcard(token, oid) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_all_jobcard", {
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

                    dispatch(set_all_jobcard(responseJson.result));

                    // dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                    // dispatch(set_all_jobcard([]));
                }
                dispatch(unsetLoader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

/*
export function delete_jobcard(id,token,oid) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "delete_jobcard", {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                user_token:token,
                organization_id:oid
            },
            body: JSON.stringify({
                // email: login.email,
                // password: login.password
                jobcard_id:id
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(get_all_jobcard(token, oid))

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
*/

export function update_jobcard(id, client_id, firm_id, majorhead_id, minorhead_id, name, token, oid) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "update_jobcard", {
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
                jobcard_id:id,
                jobcard_name:name,
                client_id:client_id,
                firm_id:firm_id,
                majorhead_id:majorhead_id,
                minorhead_id:minorhead_id
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(get_all_jobcard(token, oid))

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

export function add_jobcard(jobcard, token, oid) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "add_jobcard", {
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
                jobcard_id:jobcard.id,
                jobcard_name:jobcard.name,
                client_id:jobcard.client_id,
                firm_id:jobcard.firm_id,
                majorhead_id:jobcard.majorhead_id,
                minorhead_id:jobcard.minorhead_id
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(get_all_jobcard(token, oid))

                    dispatch(reset_jobcard())

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

export function set_all_jobcard(payload){
    console.log(payload)
    return{
        type:SET_ALL_JOBCARD,
        payload:payload
    }
}

export function set_jobcard_name(payload){
    return{
        type:SET_JOBCARD_NAME,
        payload:payload
    }
}

export function set_jobcard_client_id(payload){
    return{
        type:SET_JOBCARD_CLIENT_ID,
        payload:payload
    }
}

export function set_jobcard_firm_id(payload){
    return{
        type:SET_JOBCARD_FIRM_ID,
        payload:payload
    }
}

export function set_jobcard_majorhead_id(payload){
    return{
        type:SET_JOBCARD_MAJORHEAD_ID,
        payload:payload
    }
}

export function set_jobcard_minorhead_id(payload){
    return{
        type:SET_JOBCARD_MINORHEAD_ID,
        payload:payload
    }
}

export function reset_jobcard(){
    return{
        type:RESET_JOBCARD
    }
}