import {
    RESET_CLIENT,
    SET_CLIENT_DEPARTMENT,
    SET_CLIENT_EMAIL, SET_CLIENT_EMPLOYEE_ID,
    SET_CLIENT_NAME, SET_CLIENT_PASSWORD, SET_CLIENT_POSITION, SET_CLIENT_PROFILE,
    SET_ALL_CLIENT
} from "../../constants/client/clientConstants";
import UNIVERSAL from "../../config/config";
import { setLoader, unsetLoader }
    from "../loader/loaderAction";
import { set_snack_bar } from "../snackbar/snackbar_action";


export function get_all_client(token, oid) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_all_clients", {
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

                    dispatch(set_all_client(responseJson.result));

                    // dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                    // dispatch(set_all_executive([]));
                }
                dispatch(unsetLoader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function delete_client(id,token,oid) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "delete_clients", {
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
                client_id:id
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(get_all_client(token, oid))

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

export function update_client(id, name, profile, email, password, position, department, employee_id, token, oid) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "update_clients", {
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
                client_id:id,
                client_name:name,
                client_profile_pic:profile,
                email:email,
                password:password,
                client_position:position,
                client_department:department,
                client_employee_id:employee_id
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(get_all_client(token, oid))

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

export function add_client(client, token, oid) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "add_clients", {
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
                client_name:client.name,
                client_profile_pic:client.profile,
                email:client.email,
                password:client.password,
                client_position:client.position,
                client_department:client.department,
                client_employee_id:client.employee_id
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(get_all_client(token, oid))

                    dispatch(reset_client())

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

export function set_all_client(payload){
    console.log(payload)
    return{
        type:SET_ALL_CLIENT,
        payload:payload
    }
}

export function set_client_name(payload){
    return{
        type:SET_CLIENT_NAME,
        payload:payload
    }
}

export function set_client_profile(payload){
    return{
        type:SET_CLIENT_PROFILE,
        payload:payload
    }
}

export function set_client_email(payload){
    return{
        type:SET_CLIENT_EMAIL,
        payload:payload
    }
}

export function set_client_password(payload){
    return{
        type:SET_CLIENT_PASSWORD,
        payload:payload
    }
}

export function set_client_position(payload){
    return{
        type:SET_CLIENT_POSITION,
        payload:payload
    }
}

export function set_client_department(payload){
    return{
        type:SET_CLIENT_DEPARTMENT,
        payload:payload
    }
}

export function set_client_employee_id(payload){
    return{
        type:SET_CLIENT_EMPLOYEE_ID,
        payload:payload
    }
}

export function reset_client(){
    return{
        type:RESET_CLIENT
    }
}