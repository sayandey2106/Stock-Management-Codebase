import {
    SET_ALL_USER
} from "../../constants/user/userConstants";
import UNIVERSAL from "../../config/config";
import {setLoader, unsetLoader}
    from "../loader/loaderAction";
import {set_snack_bar} from "../snackbar/snackbar_action";
import {onLogout} from '../loginActions'
import {set_all_request} from "../request/requestActions";

export function get_all_users(company_id) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_corporate_users", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // user_token: token,
                // organization_id: oid
                // company_id:company_id,
            },
            body: JSON.stringify({
                // email: login.email,
                // password: login.password
                company_id:company_id,
                // user_id: user_id,
                // category_id:category_id
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log("User Api")
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(set_all_user(responseJson.result));

                    // dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    if(responseJson.message ==="User Does Not Exist"){
                        dispatch(onLogout())
                    }else {
                        dispatch(set_snack_bar(responseJson.status, responseJson.message));
                    }
                    // dispatch(set_all_request([]));
                }
                dispatch(unsetLoader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function set_all_user(payload) {
    // console.log(payload)
    return {
        type: SET_ALL_USER,
        payload: payload
    }
}
