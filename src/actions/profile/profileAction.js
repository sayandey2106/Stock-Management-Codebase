import {
    SET_PROFILE, EDIT_PROFILE
} from "../../constants/profile/profileConst";
import UNIVERSAL from "../../config/config";
import {setLoader, unsetLoader}
    from "../loader/loaderAction";
import {set_snack_bar} from "../snackbar/snackbar_action";


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
                "Auth-token" : (localStorage.getItem('sre_user_id'))
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
                    
                    dispatch(set_snack_bar(true, responseJson.message));
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
                "Auth-token" : (localStorage.getItem('sre_user_id'))
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
                    
                    dispatch(set_snack_bar(true, responseJson.message));
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
                "Auth-token" : (localStorage.getItem('sre_user_id'))
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

                } else {
                    
                    dispatch(set_snack_bar(true, responseJson.message));
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
                "Auth-token" : (localStorage.getItem('sre_user_id'))
            },
            body: JSON.stringify({
            college_name : value
        
             }),
        }).then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson)
                if (responseJson.status) {

                    // dispatch({type:EDIT_PROFILE,payload:responseJson.profile_update});

                    // dispatch(set_snack_bar(true, responseJson.message));
                    console.log(responseJson.profile_update,"hi");

                } else {
                    
                    dispatch(set_snack_bar(true, responseJson.message));
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
                "Auth-token" : (localStorage.getItem('sre_user_id'))
            },
            body: JSON.stringify({
            caste : value
        
             }),
        }).then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson)
                if (responseJson.status) {

                    // dispatch({type:EDIT_PROFILE,payload:responseJson.profile_update});

                    // dispatch(set_snack_bar(true, responseJson.message));
                    console.log(responseJson.profile_update,"hi");

                } else {
                    
                    dispatch(set_snack_bar(true, responseJson.message));
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
                "Auth-token" : (localStorage.getItem('sre_user_id'))
            },
            body: JSON.stringify({
            gender : value
        
             }),
        }).then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson)
                if (responseJson.status) {

                    // dispatch({type:EDIT_PROFILE,payload:responseJson.profile_update});

                    // dispatch(set_snack_bar(true, responseJson.message));
                    console.log(responseJson.profile_update,"hi");

                } else {
                    
                    dispatch(set_snack_bar(true, responseJson.message));
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
                "Auth-token" : (localStorage.getItem('sre_user_id'))
            },
            body: JSON.stringify({
            education : value
        
             }),
        }).then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson)
                if (responseJson.status) {

                    // dispatch({type:EDIT_PROFILE,payload:responseJson.profile_update});

                    // dispatch(set_snack_bar(true, responseJson.message));
                    console.log(responseJson.profile_update,"hi");

                } else {
                    
                    dispatch(set_snack_bar(true, responseJson.message));
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
                "Auth-token" : (localStorage.getItem('sre_user_id'))
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

                } else {
                    
                    dispatch(set_snack_bar(true, responseJson.message));
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
                "Auth-token" : (localStorage.getItem('sre_user_id'))
            },
            body: JSON.stringify({
            dob : value
        
             }),
        }).then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson)
                if (responseJson.status) {

                    // dispatch({type:EDIT_PROFILE,payload:responseJson.profile_update});

                    // dispatch(set_snack_bar(true, responseJson.message));
                    console.log(responseJson.profile_update,"hi");

                } else {
                    
                    dispatch(set_snack_bar(true, responseJson.message));
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
                "Auth-token" : (localStorage.getItem('sre_user_id'))
            },
            body: JSON.stringify({
            branch_name : value
        
             }),
        }).then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson)
                if (responseJson.status) {

                    // dispatch({type:EDIT_PROFILE,payload:responseJson.profile_update});

                    // dispatch(set_snack_bar(true, responseJson.message));
                    console.log(responseJson.profile_update,"hi");

                } else {
                    
                    dispatch(set_snack_bar(true, responseJson.message));
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
                "Auth-token" : (localStorage.getItem('sre_user_id'))
            },
            body: JSON.stringify({
            profile_pic : value
        
             }),
        }).then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson)
                if (responseJson.status) {

                    // dispatch({type:EDIT_PROFILE,payload:responseJson.profile_update});

                    // dispatch(set_snack_bar(true, responseJson.message));
                    console.log(responseJson.profile_update,"hi");

                } else {
                    
                    dispatch(set_snack_bar(true, responseJson.message));
                }
                dispatch(unsetLoader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}