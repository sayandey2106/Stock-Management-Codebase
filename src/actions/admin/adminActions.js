import {
    RESET_ADMIN,
    SET_ADMIN_DEPARTMENT,
    SET_ADMIN_EMAIL, SET_ADMIN_EMPLOYEE_ID,
    SET_ADMIN_NAME, SET_ADMIN_PASSWORD, SET_ADMIN_POSITION, SET_ADMIN_PROFILE,
    SET_ALL_ADMIN
} from "../../constants/admin/adminConst";
import UNIVERSAL from "../../config/config";
import {setLoader, unsetLoader}
    from "../loader/loaderAction";
import {set_snack_bar} from "../snackbar/snackbar_action";
import firebase from 'firebase';


export function get_all_admin(token, oid) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_all_admin", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                user_token: token,
                organization_id: oid
            },
            // body: JSON.stringify({
            //     // email: login.email,
            //     // password: login.password
            // }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(set_all_admin(responseJson.result));

                    // dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                    // dispatch(set_all_admin([]));
                }
                dispatch(unsetLoader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function delete_admin(id, token, oid) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "delete_admin", {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                user_token: token,
                organization_id: oid
            },
            body: JSON.stringify({
                // email: login.email,
                // password: login.password
                admin_id: id
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(get_all_admin(token, oid))

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

export function update_admin(id, name, profile, email, password, position, department, employee_id, token, oid) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "update_admin", {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                user_token: token,
                organization_id: oid
            },
            body: JSON.stringify({
                // email: login.email,
                // password: login.password
                admin_id: id,
                admin_name: name,
                admin_profile_pic: profile,
                email: email,
                password: password,
                admin_position: position,
                admin_department: department,
                admin_employee_id: employee_id
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(get_all_admin(token, oid))

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

export function add_admin_api(admin, token, oid, URL) {
    return (dispatch) => {
        // dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "add_admin", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                user_token: token,
                organization_id: oid
            },
            body: JSON.stringify({
                // email: login.email,
                // password: login.password
                admin_name: admin.name,
                admin_profile_pic:URL,
                email: admin.email,
                password: admin.password,
                admin_position: admin.position,
                admin_department: admin.department,
                admin_employee_id: admin.employee_id
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(get_all_admin(token, oid))

                    dispatch(reset_admin())

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

export function set_all_admin(payload) {
    console.log(payload)
    return {
        type: SET_ALL_ADMIN,
        payload: payload
    }
}

export function set_admin_name(payload) {
    return {
        type: SET_ADMIN_NAME,
        payload: payload
    }
}

export function set_admin_profile(payload) {
    return {
        type: SET_ADMIN_PROFILE,
        payload: payload
    }
}

export function set_admin_email(payload) {
    return {
        type: SET_ADMIN_EMAIL,
        payload: payload
    }
}

export function set_admin_password(payload) {
    return {
        type: SET_ADMIN_PASSWORD,
        payload: payload
    }
}

export function set_admin_position(payload) {
    return {
        type: SET_ADMIN_POSITION,
        payload: payload
    }
}

export function set_admin_department(payload) {
    return {
        type: SET_ADMIN_DEPARTMENT,
        payload: payload
    }
}

export function set_admin_employee_id(payload) {
    return {
        type: SET_ADMIN_EMPLOYEE_ID,
        payload: payload
    }
}

export function reset_admin() {
    return {
        type: RESET_ADMIN
    }
}

export function add_admin(admin,token,oid) {
    return (dispatch) => {
        dispatch(setLoader());
        if (admin.profile !== null) {
            var storageRef = firebase.storage().ref();
            var uploadTask = storageRef.child("profile/admin/" + admin.name + ".png").put(admin.profile);
            uploadTask.on("state_changed", function (snapshot) {
            }, function (error) {
                dispatch(set_snack_bar(true, "Image Could Not Be Uploaded"));
            }, function () {
                uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                    dispatch(add_admin_api(admin,token,oid,downloadURL))
                });
            });
        } else {
            dispatch(admin, token, oid, "")
        }
    }
}