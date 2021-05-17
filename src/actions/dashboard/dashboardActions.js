import {
    SET_DASHBOARD_DATA
} from "../../constants/dashboard/dashboardConstants";
import UNIVERSAL from "../../config/config";
import {setLoader, unsetLoader}
    from "../loader/loaderAction";
import {set_snack_bar} from "../snackbar/snackbar_action";
import {onLogout} from '../loginActions'



export function get_dashboard_data(id) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "qb_dashboard", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // user_token: token,
                // organization_id: oid
                company_id:id
            },
            body:JSON.stringify({
                company_id:id
            })
            
            
            // body: JSON.stringify({
            //     // email: login.email,
            //     // password: login.password
            // }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(set_dashboard_data(responseJson.result));

                    // dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    if(responseJson.message ==="User Does Not Exist"){
                        dispatch(onLogout())
                    }else {
                        dispatch(set_snack_bar(responseJson.status, responseJson.message));
                    }
                    // dispatch(set_all_category([]));
                }
                dispatch(unsetLoader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function set_dashboard_data(payload) {
    console.log(payload)
    return {
        type: SET_DASHBOARD_DATA,
        payload: payload
    }
}
