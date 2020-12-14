import {
    RESET_CLIENT,
    SET_CLIENT_EMAIL,
    SET_CLIENT_NAME,
    SET_CLIENT_PROFILE,
    SET_ALL_CLIENT,
    SET_CLIENT_CONTACT_NUM,
    SET_CLIENT_ADDRESS,
    SET_CLIENT_PAN_NUM,
    SET_CLIENT_AADHAR_NUM,
    SET_CLIENT_CLIENT_SOURCE
} from "../../constants/client/clientConstants";
import UNIVERSAL from "../../config/config";
import { setLoader, unsetLoader }
    from "../loader/loaderAction";
import { set_snack_bar } from "../snackbar/snackbar_action";
import firebase from "firebase";
import {update_admin_api} from "../admin/adminActions";
import {onLogout} from "../loginActions";


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
                console.log("client action")
                if (responseJson.status) {

                    dispatch(set_all_client(responseJson.result));

                    // dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    if(responseJson.message === "User doesn't Exist") {
                        onLogout()
                    } else {
                        dispatch(set_snack_bar(responseJson.status, responseJson.message));
                    }
                    // dispatch(set_all_client([]));
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

export function update_client_api(id, name, email, profile, contact_num, address, pan_num, aadhar_name, client_source, token, oid, URL) {
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
                client_profile_pic:URL,
                client_email:email,
                client_contact_num:contact_num,
                client_address:address,
                client_pan_number:pan_num,
                client_aadhar_number:aadhar_name,
                client_source:client_source
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(get_all_client(token, oid))

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

export function add_client_api(client, token, oid, URL) {
    return (dispatch) => {
        dispatch(setLoader());
        console.log("Inside client add action")
        console.log(client.pan_num)
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
                client_profile_pic:URL,
                client_email:client.email,
                client_contact_num:client.contact_num,
                client_address:client.address,
                client_pan_number:client.pan_num,
                client_aadhar_number:client.aadhar_num,
                client_source:client.client_source
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(get_all_client(token, oid))

                    dispatch(reset_client())

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

export function set_client_contact_num(payload){
    return{
        type:SET_CLIENT_CONTACT_NUM,
        payload:payload
    }
}

export function set_client_address(payload){
    return{
        type:SET_CLIENT_ADDRESS,
        payload:payload
    }
}

export function set_client_pan_num(payload){
    return{
        type:SET_CLIENT_PAN_NUM,
        payload:payload
    }
}

export function set_client_aadhar_num(payload){
    return{
        type:SET_CLIENT_AADHAR_NUM,
        payload:payload
    }
}

export function set_client_client_source(payload){
    return{
        type:SET_CLIENT_CLIENT_SOURCE,
        payload:payload
    }
}

export function reset_client(){
    return{
        type:RESET_CLIENT
    }
}

export function add_client(client,token,oid) {
    return (dispatch) => {
        dispatch(setLoader());
        if (client.profile !== null) {
            var storageRef = firebase.storage().ref();
            var uploadTask = storageRef.child("profile/client/" + client.name + ".png").put(client.profile);
            uploadTask.on("state_changed", function (snapshot) {
            }, function (error) {
                dispatch(set_snack_bar(true, "Image Could Not Be Uploaded"));
            }, function () {
                uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                    dispatch(add_client_api(client,token,oid,downloadURL))
                });
            });
        } else {
            dispatch(client, token, oid, "")
        }
    }
}

export function update_client(id, name, email, profile, old_profile, contact_num, address, pan_num, aadhar_name, client_source, token,oid) {
    return (dispatch) => {
        dispatch(setLoader());
        console.log(profile);
        if (profile !== "") {
            var storageRef = firebase.storage().ref();
            var uploadTask = storageRef.child("profile/client/" + name + ".png").put(profile);
            uploadTask.on("state_changed", function (snapshot) {
            }, function (error) {
                dispatch(set_snack_bar(true, "Image Could Not Be Uploaded"));
            }, function () {
                uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                    dispatch(update_client_api(id, name, email, profile, contact_num, address, pan_num, aadhar_name, client_source, token,oid,downloadURL))
                });
            });
        } else {
            dispatch(update_client_api(id, name, email, profile, contact_num, address, pan_num, aadhar_name, client_source, token, oid, old_profile))
        }
    }
}

