import {
   SET_EXAM_HISTORY, SET_SUMMARY
} from "../../constants/dashboard/dashboardConstants";
import UNIVERSAL from "../../config/config";
import {setLoader, unsetLoader}
    from "../loader/loaderAction";
import {set_snack_bar} from "../snackbar/snackbar_action";
import {onLogout} from '../loginActions'


export function get_dashboard_data() {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "api/Sauth/dashboard", {
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

                    dispatch({type:SET_SUMMARY,payload:responseJson.summary});
                    dispatch({type:SET_EXAM_HISTORY,payload:responseJson.history});
                    // dispatch(set_snack_bar(true, responseJson.message));
                    console.log(responseJson.summary,"hi");

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
