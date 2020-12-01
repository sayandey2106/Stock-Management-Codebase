import {

    SET_ALL_ADMIN
} from "../../constants/admin/adminConst";
import UNIVERSAL from "../../config/config";
import { setLoader, unsetLoader }
    from "../loader/loaderAction";
import { set_snack_bar } from "../snackbar/snackbar_action";


export function get_all_admin(token) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_all_admin", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                user_token:token
            },
            body: JSON.stringify({
                // email: login.email,
                // password: login.password
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(set_all_admin(responseJson.result))

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
export function set_all_admin(payload){
    return{
        type:SET_ALL_ADMIN,
        payload:payload
    }
}