import {
    RESET_FIRM,
    SET_ALL_FIRM, SET_FIRM_CLIENT_ID,
    SET_FIRM_DDO,
    SET_FIRM_DIN,
    SET_FIRM_GST,
    SET_FIRM_IEC,
    SET_FIRM_PF_ESI,
    SET_FIRM_PT,
    SET_FIRM_REG,
    SET_FIRM_TYPE,
} from "../../constants/firm/firmConstants";
import UNIVERSAL from "../../config/config";
import { setLoader, unsetLoader }
    from "../loader/loaderAction";
import { set_snack_bar } from "../snackbar/snackbar_action";
import firebase from "firebase";
import {onLogout} from "../loginActions";


export function get_all_firm(token, oid) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_all_firms", {
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
                console.log("firm action")
                if (responseJson.status) {

                    dispatch(set_all_firm(responseJson.result));

                    // dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    if(responseJson.message === "User doesn't Exist") {
                        onLogout()
                    } else {
                        dispatch(set_snack_bar(responseJson.status, responseJson.message));
                    }
                    // dispatch(set_all_firm([]));
                }
                dispatch(unsetLoader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function delete_firm(id,token,oid) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "delete_firm", {
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
                firm_id:id
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(get_all_firm(token, oid))

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

export function update_firm_api(id, name, email, profile, contact_num, address, pan_num, aadhar_name, firm_source, token, oid, URL) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "update_firm", {
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
                firm_id:id,
                firm_name:name,
                firm_profile_pic:URL,
                firm_email:email,
                firm_contact_num:contact_num,
                firm_address:address,
                firm_pan_number:pan_num,
                firm_aadhar_number:aadhar_name,
                firm_source:firm_source
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(get_all_firm(token, oid))

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

export function add_firm_api(firm, token, oid, URL) {
    return (dispatch) => {
        dispatch(setLoader());
        console.log("Inside firm add action")
        console.log(firm.pan_num)
        return fetch(UNIVERSAL.BASEURL + "add_firms", {
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
                firm_name:firm.name,
                firm_profile_pic:URL,
                firm_email:firm.email,
                firm_contact_num:firm.contact_num,
                firm_address:firm.address,
                firm_pan_number:firm.pan_num,
                firm_aadhar_number:firm.aadhar_num,
                firm_source:firm.firm_source
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(get_all_firm(token, oid))

                    dispatch(reset_firm())

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

export function set_all_firm(payload){
    console.log(payload)
    return{
        type:SET_ALL_FIRM,
        payload:payload
    }
}

export function set_firm_type(payload){
    return{
        type:SET_FIRM_TYPE,
        payload:payload
    }
}

export function set_firm_reg(payload){
    return{
        type:SET_FIRM_REG,
        payload:payload
    }
}

export function set_firm_gst(payload){
    return{
        type:SET_FIRM_GST,
        payload:payload
    }
}

export function set_firm_din(payload){
    return{
        type:SET_FIRM_DIN,
        payload:payload
    }
}

export function set_firm_pt(payload){
    return{
        type:SET_FIRM_PT,
        payload:payload
    }
}

export function set_firm_pf_esi(payload){
    return{
        type:SET_FIRM_PF_ESI,
        payload:payload
    }
}

export function set_firm_iec(payload){
    return{
        type:SET_FIRM_IEC,
        payload:payload
    }
}

export function set_firm_ddo(payload){
    return{
        type:SET_FIRM_DDO,
        payload:payload
    }
}

export function set_firm_client_id(payload){
    return{
        type:SET_FIRM_CLIENT_ID,
        payload:payload
    }
}

export function reset_firm(){
    return{
        type:RESET_FIRM
    }
}

export function add_firm(firm,token,oid) {
    return (dispatch) => {
        dispatch(setLoader());
        if (firm.profile !== null) {
            var storageRef = firebase.storage().ref();
            var uploadTask = storageRef.child("profile/firm/" + firm.name + ".png").put(firm.profile);
            uploadTask.on("state_changed", function (snapshot) {
            }, function (error) {
                dispatch(set_snack_bar(true, "Image Could Not Be Uploaded"));
            }, function () {
                uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                    dispatch(add_firm_api(firm,token,oid,downloadURL))
                });
            });
        } else {
            dispatch(firm, token, oid, "")
        }
    }
}

export function update_firm(id, name, email, profile, old_profile, contact_num, address, pan_num, aadhar_name, firm_source, token,oid) {
    return (dispatch) => {
        dispatch(setLoader());
        console.log(profile);
        if (profile !== "") {
            var storageRef = firebase.storage().ref();
            var uploadTask = storageRef.child("profile/firm/" + name + ".png").put(profile);
            uploadTask.on("state_changed", function (snapshot) {
            }, function (error) {
                dispatch(set_snack_bar(true, "Image Could Not Be Uploaded"));
            }, function () {
                uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                    dispatch(update_firm_api(id, name, email, profile, contact_num, address, pan_num, aadhar_name, firm_source, token,oid,downloadURL))
                });
            });
        } else {
            dispatch(update_firm_api(id, name, email, profile, contact_num, address, pan_num, aadhar_name, firm_source, token, oid, old_profile))
        }
    }
}

