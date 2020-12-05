import {
    RESET_MANAGER,
    SET_MANAGER_DEPARTMENT,
    SET_MANAGER_EMAIL, SET_MANAGER_EMPLOYEE_ID,
    SET_MANAGER_NAME, SET_MANAGER_PASSWORD, SET_MANAGER_POSITION, SET_MANAGER_PROFILE,
    SET_ALL_MANAGER
} from "../../constants/manager/managerConstants";
import UNIVERSAL from "../../config/config";
import { setLoader, unsetLoader }
    from "../loader/loaderAction";
import { set_snack_bar } from "../snackbar/snackbar_action";


export function get_all_manager(token, oid) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_all_manager", {
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

                    dispatch(set_all_manager(responseJson.result));

                    // dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                    // dispatch(set_all_manager([]));
                }
                dispatch(unsetLoader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function delete_manager(id,token,oid) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "delete_manager", {
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
                manager_id:id
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(get_all_manager(token, oid))

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

export function update_manager(id, name, profile, email, password, position, department, employee_id, token, oid) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "update_manager", {
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
                manager_id:id,
                manager_name:name,
                manager_profile_pic:profile,
                email:email,
                password:password,
                manager_position:position,
                manager_department:department,
                manager_employee_id:employee_id
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(get_all_manager(token, oid))

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

export function add_manager(manager, token, oid) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "add_manager", {
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
                manager_name:manager.name,
                manager_profile_pic:manager.profile,
                email:manager.email,
                password:manager.password,
                manager_position:manager.position,
                manager_department:manager.department,
                manager_employee_id:manager.employee_id
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(get_all_manager(token, oid))

                    dispatch(reset_manager())

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

export function set_all_manager(payload){
    console.log(payload)
    return{
        type:SET_ALL_MANAGER,
        payload:payload
    }
}

export function set_manager_name(payload){
    return{
        type:SET_MANAGER_NAME,
        payload:payload
    }
}

export function set_manager_profile(payload){
    return{
        type:SET_MANAGER_PROFILE,
        payload:payload
    }
}

export function set_manager_email(payload){
    return{
        type:SET_MANAGER_EMAIL,
        payload:payload
    }
}

export function set_manager_password(payload){
    return{
        type:SET_MANAGER_PASSWORD,
        payload:payload
    }
}

export function set_manager_position(payload){
    return{
        type:SET_MANAGER_POSITION,
        payload:payload
    }
}

export function set_manager_department(payload){
    return{
        type:SET_MANAGER_DEPARTMENT,
        payload:payload
    }
}

export function set_manager_employee_id(payload){
    return{
        type:SET_MANAGER_EMPLOYEE_ID,
        payload:payload
    }
}

export function reset_manager(){
    return{
        type:RESET_MANAGER
    }
}