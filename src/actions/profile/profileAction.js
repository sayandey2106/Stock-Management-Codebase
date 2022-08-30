import {
    SET_PROFILE, EDIT_PROFILE
} from "../../constants/profile/profileConst";
import UNIVERSAL from "../../config/config";
import {setLoader, unsetLoader}
    from "../loader/loaderAction";
    import firebase from "firebase";
    import { storage } from "../../constants/ActionTypes";


export function view_profile(authToken) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "api/Sauth/view_profile", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // user_token: token,
                // organization_id: oid
                // company_id:id
                "Auth-token" : (localStorage.getItem('sre_auth_token'))
            },
            // body: JSON.stringify({
            //     user_id:user_id
        
            //  }),
        }).then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson)
                if (responseJson.status) {

                    dispatch({type:SET_PROFILE,payload:responseJson.profile});

                    // dispatch(set_snack_bar(true, responseJson.message));
                    console.log(responseJson.profile,"hi");

                } else {
                    
                   
                }
                dispatch(unsetLoader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function view_profile_admin(authToken) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "api/Aauth/view_profile", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // user_token: token,
                // organization_id: oid
                // company_id:id
                "auth-token" : (localStorage.getItem('sre_auth_token'))
            },
            // body: JSON.stringify({
            //     user_id:user_id
        
            //  }),
        }).then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson)
                if (responseJson.status) {

                    dispatch({type:SET_PROFILE,payload:responseJson.profile});

                    // dispatch(set_snack_bar(true, responseJson.message));
                    console.log(responseJson.profile,"hi");

                } else {
                    
                   
                }
                dispatch(unsetLoader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}


export function edit_name(value) {
    // console.log(profile)
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "api/Sauth/update_profile", {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // user_token: token,
                // organization_id: oid
                // company_id:id
                "Auth-token" : (localStorage.getItem('sre_auth_token'))
            },
            body: JSON.stringify({
            name : value
        
             }),
        }).then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson)
                if (responseJson.status) {

                    // dispatch({type:EDIT_PROFILE,payload:responseJson.profile_update});

                    // dispatch(set_snack_bar(true, responseJson.message));
                    console.log(responseJson.profile_update,"hi");
                    dispatch(view_profile())

                } else {
                    
                  
                }
                dispatch(unsetLoader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}
export function edit_college_name( value) {
    // console.log(profile)
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "api/Sauth/update_profile", {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // user_token: token,
                // organization_id: oid
                // company_id:id
                "Auth-token" : (localStorage.getItem('sre_auth_token'))
            },
            body: JSON.stringify({
            college_name : value
        
             }),
        }).then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson)
                if (responseJson.status) {
                    dispatch(view_profile())
                    // dispatch({type:EDIT_PROFILE,payload:responseJson.profile_update});

                    // dispatch(set_snack_bar(true, responseJson.message));
                    console.log(responseJson.profile_update,"hi");

                } else {
                    
                }
                dispatch(unsetLoader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function edit_caste( value) {
    // console.log(profile)
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "api/Sauth/update_profile", {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // user_token: token,
                // organization_id: oid
                // company_id:id
                "Auth-token" : (localStorage.getItem('sre_auth_token'))
            },
            body: JSON.stringify({
            caste : value
        
             }),
        }).then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson)
                if (responseJson.status) {

                    // dispatch({type:EDIT_PROFILE,payload:responseJson.profile_update});
                    dispatch(view_profile())
                    // dispatch(set_snack_bar(true, responseJson.message));
                    console.log(responseJson.profile_update,"hi");

                } else {
                    
                }
                dispatch(unsetLoader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}
export function edit_gender( value) {
    // console.log(profile)
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "api/Sauth/update_profile", {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // user_token: token,
                // organization_id: oid
                // company_id:id
                "Auth-token" : (localStorage.getItem('sre_auth_token'))
            },
            body: JSON.stringify({
            gender : value
        
             }),
        }).then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson)
                if (responseJson.status) {

                    // dispatch({type:EDIT_PROFILE,payload:responseJson.profile_update});
                    dispatch(view_profile())
                    // dispatch(set_snack_bar(true, responseJson.message));
                    console.log(responseJson.profile_update,"hi");

                } else {
                    
                }
                dispatch(unsetLoader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function edit_skills( value) {
    // console.log(profile)
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "api/Sauth/update_profile", {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // user_token: token,
                // organization_id: oid
                // company_id:id
                "Auth-token" : (localStorage.getItem('sre_auth_token'))
            },
            body: JSON.stringify({
            education : value
        
             }),
        }).then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson)
                if (responseJson.status) {
                    dispatch(view_profile())
                    // dispatch({type:EDIT_PROFILE,payload:responseJson.profile_update});

                    // dispatch(set_snack_bar(true, responseJson.message));
                    console.log(responseJson.profile_update,"hi");

                } else {
                    
                }
                dispatch(unsetLoader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}
export function edit_mobile( value) {
    // console.log(profile)
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "api/Sauth/update_profile", {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // user_token: token,
                // organization_id: oid
                // company_id:id
                "Auth-token" : (localStorage.getItem('sre_auth_token'))
            },
            body: JSON.stringify({
                phone_no : value
        
             }),
        }).then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson)
                if (responseJson.status) {

                    // dispatch({type:EDIT_PROFILE,payload:responseJson.profile_update});

                    // dispatch(set_snack_bar(true, responseJson.message));
                    console.log(responseJson.profile_update,"hi");
                    dispatch(view_profile());
                } else {
                    
                }
                dispatch(unsetLoader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}
export function edit_dob( value) {
    // console.log(profile)
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "api/Sauth/update_profile", {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // user_token: token,
                // organization_id: oid
                // company_id:id
                "Auth-token" : (localStorage.getItem('sre_auth_token'))
            },
            body: JSON.stringify({
            dob : value
        
             }),
        }).then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson)
                if (responseJson.status) {

                    // dispatch({type:EDIT_PROFILE,payload:responseJson.profile_update});
                    dispatch(view_profile())
                    // dispatch(set_snack_bar(true, responseJson.message));
                    console.log(responseJson.profile_update,"hi");

                } else {
                }
                dispatch(unsetLoader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}
export function edit_branch( value) {
    // console.log(profile)
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "api/Sauth/update_profile", {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // user_token: token,
                // organization_id: oid
                // company_id:id
                "Auth-token" : (localStorage.getItem('sre_auth_token'))
            },
            body: JSON.stringify({
            branch_name : value
        
             }),
        }).then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson)
                if (responseJson.status) {

                    // dispatch({type:EDIT_PROFILE,payload:responseJson.profile_update});
                    dispatch(view_profile())
                    // dispatch(set_snack_bar(true, responseJson.message));
                    console.log(responseJson.profile_update,"hi");

                } else {
                    
                }
                dispatch(unsetLoader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}
export function edit_photo( value) {
    // console.log(profile)
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "api/Sauth/update_profile", {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // user_token: token,
                // organization_id: oid
                // company_id:id
                "Auth-token" : (localStorage.getItem('sre_auth_token'))
            },
            body: JSON.stringify({
            profile : value
        
             }),
        }).then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson)
                if (responseJson.status) {

                    // dispatch({type:EDIT_PROFILE,payload:responseJson.profile_update});

                    // dispatch(set_snack_bar(true, responseJson.message));
                    console.log(responseJson.profile_update,"hi");
                    dispatch(view_profile())
                } else {
                    
                }
                dispatch(unsetLoader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function get_edit_profile_pic_link(file,name) {
    console.log(file)
    return (dispatch) => {
        dispatch(setLoader());
      {
            var storageRef = firebase.storage().ref();
            var uploadTask = storageRef
                .child("/Quiz/profilepic/student/" + name + ".png")
                .put(file);
            uploadTask.on(
                "state_changed",
                function (snapshot) {
                },
                function (error) {
                    // dispatch(set_snack_bar(true, "Image Could Not Be sUploaded"));
                    alert("Image Could Not Be sUploaded")
                },
                function () {
                    uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                        alert("Image sUploaded")

                        dispatch(edit_photo( downloadURL));
                        dispatch(unsetLoader());
                    });
                }
            );
        }
    };
}
