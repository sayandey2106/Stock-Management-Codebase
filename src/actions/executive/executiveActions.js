import {
    RESET_EXECUTIVE,
    SET_EXECUTIVE_DEPARTMENT,
    SET_EXECUTIVE_EMAIL, SET_EXECUTIVE_EMPLOYEE_ID,
    SET_EXECUTIVE_NAME, SET_EXECUTIVE_PASSWORD, SET_EXECUTIVE_POSITION, SET_EXECUTIVE_PROFILE,
    SET_ALL_EXECUTIVE
} from "../../constants/executive/executiveConstants";
import UNIVERSAL from "../../config/config";
import { setLoader, unsetLoader }
    from "../loader/loaderAction";
import { set_snack_bar } from "../snackbar/snackbar_action";
import firebase from "firebase";


export function get_all_executive(token, oid) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_all_executive", {
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

                    dispatch(set_all_executive(responseJson.result));

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

export function delete_executive(id,token,oid) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "delete_executive", {
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
                executive_id:id
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(get_all_executive(token, oid))

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

export function update_executive(id, name, profile, email, password, position, department, employee_id, token, oid) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "update_executive", {
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
                executive_id:id,
                executive_name:name,
                executive_profile_pic:profile,
                email:email,
                password:password,
                executive_position:position,
                executive_department:department,
                executive_employee_id:employee_id
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(get_all_executive(token, oid))

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

export function add_executive_api(executive, token, oid, URL) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "add_executive", {
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
                executive_name:executive.name,
                executive_profile_pic:URL,
                email:executive.email,
                password:executive.password,
                executive_position:executive.position,
                executive_department:executive.department,
                executive_employee_id:executive.employee_id
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(get_all_executive(token, oid))

                    dispatch(reset_executive())

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

export function set_all_executive(payload){
    console.log(payload)
    return{
        type:SET_ALL_EXECUTIVE,
        payload:payload
    }
}

export function set_executive_name(payload){
    return{
        type:SET_EXECUTIVE_NAME,
        payload:payload
    }
}

export function set_executive_profile(payload){
    return{
        type:SET_EXECUTIVE_PROFILE,
        payload:payload
    }
}

export function set_executive_email(payload){
    return{
        type:SET_EXECUTIVE_EMAIL,
        payload:payload
    }
}

export function set_executive_password(payload){
    return{
        type:SET_EXECUTIVE_PASSWORD,
        payload:payload
    }
}

export function set_executive_position(payload){
    return{
        type:SET_EXECUTIVE_POSITION,
        payload:payload
    }
}

export function set_executive_department(payload){
    return{
        type:SET_EXECUTIVE_DEPARTMENT,
        payload:payload
    }
}

export function set_executive_employee_id(payload){
    return{
        type:SET_EXECUTIVE_EMPLOYEE_ID,
        payload:payload
    }
}

export function reset_executive(){
    return{
        type:RESET_EXECUTIVE
    }
}

export function add_executive(executive,token,oid) {
    return (dispatch) => {
        dispatch(setLoader());
        if (executive.profile !== null) {
            var storageRef = firebase.storage().ref();
            var uploadTask = storageRef.child("profile/executive/" + executive.name + ".png").put(executive.profile);
            uploadTask.on("state_changed", function (snapshot) {
            }, function (error) {
                dispatch(set_snack_bar(true, "Image Could Not Be Uploaded"));
            }, function () {
                uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                    dispatch(add_executive_api(executive,token,oid,downloadURL))
                });
            });
        } else {
            dispatch(executive, token, oid, "")
        }
    }
}