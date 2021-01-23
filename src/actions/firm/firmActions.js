import {
    RESET_FIRM,
    SET_ALL_FIRM, SET_FIRM_CLIENT_ID, SET_FIRM_NAME,
    SET_FIRM_DDO,
    SET_FIRM_DIN,
    SET_FIRM_GST,
    SET_FIRM_IEC,
    SET_FIRM_PF_ESI,
    SET_FIRM_PT,
    SET_FIRM_REG,
    SET_FIRM_TYPE
} from "../../constants/firm/firmConstants";
import UNIVERSAL from "../../config/config";
import { setLoader, unsetLoader }
    from "../loader/loaderAction";
import { set_snack_bar } from "../snackbar/snackbar_action";
import firebase from "firebase";
import {onLogout} from "../loginActions";
import {reset_client} from "../client/clientActions";


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

export function update_firm(id, client_id, name, type, reg, gst, din, pt, pf_esi, iec, ddo, token, oid) {
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
                client_id:client_id,
                firm_name:name,
                firm_type:type,
                firm_reg_num:reg,
                firm_gst_num:gst,
                firm_din_num:din,
                firm_pt_num:pt,
                firm_pf_esi_num:pf_esi,
                firm_iec_num:iec,
                firm_ddo_num:ddo
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

export function add_firm(firm, token, oid) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "add_firm", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                user_token:token,
                organization_id:oid
            },
            body: JSON.stringify({
                firm_id:firm.id,
                client_id:firm.client_id,
                firm_name:firm.name,
                firm_type:firm.type,
                firm_reg_num:firm.reg,
                firm_gst_num:firm.gst,
                firm_din_num:firm.din,
                firm_pt_num:firm.pt,
                firm_pf_esi_num:firm.pf_esi,
                firm_iec_num:firm.iec,
                firm_ddo_num:firm.ddo
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

export function set_firm_name(payload){
    return{
        type:SET_FIRM_NAME,
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

export function search_firm(name, token, oid) {
    return (dispatch) => {
        dispatch(setLoader());
        // console.log("Inside client search action")
        // console.log(name)
        return fetch(UNIVERSAL.BASEURL + "search_firm", {
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
                firm_name:name,
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log("Inside firm search api")
                console.log(responseJson)
                if (responseJson.status) {

                    // dispatch(get_all_client(token, oid))

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

export function filter_firm(type, id, token, oid) {
    return (dispatch) => {
        dispatch(setLoader());
        // console.log("Inside client filter action")
        // console.log(name)
        return fetch(UNIVERSAL.BASEURL + "filter_firm", {
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
                firm_type:type,
                client_id: id
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log("Inside firm filter api")
                console.log(responseJson)
                if (responseJson.status) {

                    // dispatch(get_all_client(token, oid))

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


/*
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

*/
