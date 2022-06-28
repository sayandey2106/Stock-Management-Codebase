import {
    SET_PROFILE
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
