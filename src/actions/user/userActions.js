import {
    SET_ALL_USER
} from "../../constants/user/userConstants";
import UNIVERSAL from "../../config/config";
import {setLoader, unsetLoader}
    from "../loader/loaderAction";
import {set_snack_bar} from "../snackbar/snackbar_action";
import {onLogout} from '../loginActions'


export function set_all_user(payload) {
    // console.log(payload)
    return {
        type: SET_ALL_USER,
        payload: payload
    }
}
